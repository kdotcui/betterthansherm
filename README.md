# cosi-103a

Jason Yang jasony@brandeis.edu

Kevin Cui: kevincui@brandeis.edu

Sherren Jielita sherrenjielita@brandeis.edu

Joshua Liu joshualiu@brandeis.edu

# Recipe Website

Project Title: Better Than Sherman

# Description

Better Than Sherman is a web-based recipe application that offers a wide range of delicious, easy-to-cook recipes. From quick snacks to elaborate meals, our recipes ensure a delightful cooking experience.

# Installation

This project is built using React. To get started:

1. Clone the repository: git clone [(https://github.com/joshliu14/cosi-103a/tree/7835069b2852adafa43885407285c727af76455a/betterthansherm)].
2. Navigate to the project directory: cd [betterthansherm].
3. Install dependencies: "npm install" or
3. to Install Front and Back-end dependencies: "npm run installall"

# Features

- Recipe Library: A wide variety of recipes.
- User-Friendly Interface: Easy navigation through recipes.
- Healthy Options: Focus on nutritious and wholesome meals.
- Cooking Mode: A kitchen-friendly view of recipe instructions, accessible via each recipe.
- Automated Azure Deployment: Ensures smooth deployment and management of the application's backend services hosted on Azure
- Recipes API: Add your own recipes using properly formatted JSON. Website displays recipes which are located inside of Recipe.json, instead of recipes which are hardcoded
- Express.js Backend: Allows access to the Recipes API through backend, and replaces the React router we had before
- Edit Functionality: Users can access the edit feature from each recipe's detail view. This opens a form pre-filled with the recipe's current details, allowing for easy modifications
- Delete Functionality: At each recipe, a delete button allows users to remove recipes they no longer need

# New Features

- Nutrition Info: Using the USDA food database, we retrieve the nutritional value of each ingredient and display it on the page
- Azure Container Alerting: Azure Container Alerting provides an operational monitoring and alerting mechanism for the application's backend services hosted on Azure. This feature is crucial for maintaining high availability, performance, and overall health of the application. Alert rules are configured in the Azure portal or through Azure CLI, targeting metrics and logs that indicate the health and performance of the containerized application. 

# Deployment
To deploy this project on Azure using the automated deployment process:

1. Ensure you have configured GitHub Actions with Azure credentials for seamless authentication.
2. The GitHub Actions workflow is set to automatically build the Docker image, push it to Azure Container Registry, and deploy it to Azure Container Apps upon merging a pull request to the main branch.
3. To initiate a deployment, merge a change into the main branch or trigger the workflow manually from GitHub Actions.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
