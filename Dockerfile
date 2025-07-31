FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build argument for API URL
ARG VITE_BASE_API_URL=http://localhost:1337/api
ENV VITE_BASE_API_URL=$VITE_BASE_API_URL

# Build the application
RUN npm run build

# Expose port (you can configure your own server)
EXPOSE 3000