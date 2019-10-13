# Initializing node package
FROM node:lts-alpine

# We will serve from http-server
RUN npm install -g http-server

# Creating working directory
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]