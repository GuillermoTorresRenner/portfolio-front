FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --only=production

# Copy built application from CI/CD pipeline
COPY build ./build

# Expose port
EXPOSE 3000

# Start with React Router server (SSR enabled)
CMD ["npm", "start"]