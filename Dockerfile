FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (needed for build)
RUN npm ci

# Copy source code and config files
COPY . .

# Copy environment file if it exists (from CI/CD)
# During build, Vite will read from .env.production if present
# RUN test -f .env.production || echo "VITE_BASE_API_URL=http://localhost:1337" > .env.production

# Build the application with production environment
RUN npm run build

# Stage 2: Serve the built application
FROM node:20-alpine

WORKDIR /app

# Install serve globally to serve static files
RUN npm install -g serve

# Copy built application from builder stage
COPY --from=0 /app/build ./build

# Expose port
EXPOSE 3000

# Start serving with SPA fallback for React Router
CMD ["serve", "-s", "build/client", "-l", "3000", "--single"]