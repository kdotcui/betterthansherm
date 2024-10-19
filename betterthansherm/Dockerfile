# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./
COPY server/package*.json ./server/

# Install the project dependencies
RUN npm install
RUN cd server && npm install

# Copy the rest of the project files to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose the port on which the app will run
EXPOSE 3000

# Set environment variables
ENV FOOD_DATA_API_KEY

# Set the command to run the app when the container starts
CMD ["node", "server/index.js"]
