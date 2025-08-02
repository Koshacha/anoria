# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy the rest of the application
COPY . .

# Build the Nuxt application
RUN pnpm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["pnpm", "start"]
