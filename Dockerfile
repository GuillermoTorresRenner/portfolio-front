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

# Install serve globally to serve static files
RUN npm install -g serve

# Expose port
EXPOSE 3000

# Start serving the built files
CMD ["serve", "-s", "build/client", "-l", "3000"]