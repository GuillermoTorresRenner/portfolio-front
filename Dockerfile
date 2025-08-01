FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (solo las de producción)
RUN npm ci --only=production

# Copy the pre-built application from CI/CD
COPY build ./build

# Copy any necessary config files
COPY react-router.config.ts ./
COPY tsconfig.json ./

# Expose port
EXPOSE 3000

# Start the application with npm start
CMD ["npm", "start"]