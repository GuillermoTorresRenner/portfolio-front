FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (needed for build)
RUN npm ci

# Copy source code and config files
COPY . .

# Build argument for API URL
ARG VITE_BASE_API_URL=http://localhost:1337/api
ENV VITE_BASE_API_URL=$VITE_BASE_API_URL

# Build the application
RUN npm run build

# Remove dev dependencies to reduce image size
RUN npm ci --only=production && npm cache clean --force

# Expose port
EXPOSE 3000

# Start the application with npm start
CMD ["npm", "start"]