const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express(); // create express app
const PORT = 3000;

const { CosmosClient } = require("@azure/cosmos");
const { DefaultAzureCredential } = require("@azure/identity");

const credential = new DefaultAzureCredential();

const endpoint = "https://groupl.documents.azure.com:443/";
const cosmosClient = new CosmosClient({
  endpoint,
  aadCredentials: credential,
});

const databaseName = "recipes";
const containerName = "recipeList";
const partitionKeyPath = ["/name"];

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use(bodyParser.json());

app.get("/api/recipes", async (req, res) => {
  const { database } = await cosmosClient.databases.createIfNotExists({
    id: databaseName,
  });

  const { container } = await database.containers.createIfNotExists({
    id: containerName,
    partitionKey: {
      paths: partitionKeyPath,
    },
  });

  const querySpec = {
    query: `select * from c order by c.id asc`,
    parameters: undefined,
  };
  const { resources } = await container.items.query(querySpec).fetchAll();
  console.log(resources);
  res.json(resources);

  //res.json(recipes);
});

// Middleware to validate JSON content type
const validateJsonContentType = (req, res, next) => {
  if (req.is("json")) {
    return next();
  } else {
    return res
      .status(400)
      .json({ error: "Invalid content type. Please provide JSON data." });
  }
};

app.post("/api/recipes", validateJsonContentType, async (req, res) => {
  const newRecipe = req.body;
  // Validate that the request body is a JSON object
  if (typeof newRecipe !== "object" || newRecipe === null) {
    return res.status(400).json({
      error: "Invalid JSON data. Please provide a valid JSON object.",
    });
  }
  try {
    const { database } = await cosmosClient.databases.createIfNotExists({
      id: databaseName,
    });

    const { container } = await database.containers.createIfNotExists({
      id: containerName,
      partitionKey: {
        paths: partitionKeyPath,
      },
    });

    const { resource, activityId, statusCode } = await container.items.create(
      newRecipe
    );
    console.log(
      `activityId: ${activityId}, statusCode: ${statusCode}, ${resource.name} inserted`
    );
    return res.status(201).json(resource);
  } catch (error) {
    console.error("error creating recipe", error);
    res.status(500).json({ error: "Internal erfverince" });
  }
});

// Route handler to retrieve food data from USDA FoodData Central API
app.get("/api/food-data", async (req, res) => {
  const query = req.query.query; // Get the query parameter from the request
  const apiKey = process.env.FOOD_DATA_API_KEY;

  // Make API request to USDA FoodData Central API
  try {
    const response = await fetch(
      `https://api.nal.usda.gov/fdc/v1/foods/search?query=${query}&dataType=Foundation&api_key=${apiKey}`
    );
    const data = await response.json();
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error("Error fetching food data:", error);
    res.status(500).json({ error: "Failed to fetch food data" });
  }
});

app.post("/api/recipes/:id", validateJsonContentType, async (req, res) => {
  const recipeId = req.params.id;
  console.log(recipeId);
  console.log(typeof recipeId);
  const updatedRecipeData = req.body;
  console.log(updatedRecipeData);
  console.log(typeof updatedRecipeData);

  try {
    const { database } = await cosmosClient.databases.createIfNotExists({
      id: databaseName,
    });
    console.log(`this prints: ${database}`);
    const { container } = await database.containers.createIfNotExists({
      id: containerName,
      partitionKey: {
        paths: partitionKeyPath,
      },
    });
    console.log(`this is the container: ${container}`);
    const { resource: updatedResource } = await container
      .item(recipeId, partitionKeyPath)
      .replace(updatedRecipeData);
    res.status(200).json(updatedResource);
  } catch (error) {
    console.error("Error updating recipe:", error);
    res.status(500).json({ error: "Failed to update the recipe" });
  }
});

app.delete("/api/recipes/:id", async (req, res) => {
  const recipeId = req.params.id;

  try {
    const { database } = await cosmosClient.databases.createIfNotExists({
      id: databaseName,
    });
    const { container } = await database.containers.createIfNotExists({
      id: containerName,
      partitionKey: {
        paths: partitionKeyPath,
      },
    });

    const { resources: items } = await container.items
      .query({
        query: "SELECT * FROM c WHERE c.id = @id",
        parameters: [{ name: "@id", value: recipeId }],
      })
      .fetchAll();

    if (items.length > 0) {
      // Use the first item's name as the partition key to delete it
      await container.item(recipeId, items[0].name).delete();
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (error) {
    console.error("Error deleting recipe:", error);
    res.status(500).json({ error: "Failed to delete the recipe" });
  }
});

// Catch-all route for React Router
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// start express server on port 5000
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
