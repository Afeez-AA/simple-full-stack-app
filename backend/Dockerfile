# Use the Node.js official image
FROM node:20-alpine

WORKDIR /app

# Copy only package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Expose backend port
EXPOSE 3001

CMD ["npm", "start"]
