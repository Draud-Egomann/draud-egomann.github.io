# Build stage
FROM node:18-alpine AS build
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Nuxt application
RUN npm run generate

# Production stage with Caddy
FROM caddy:alpine
WORKDIR /usr/share/caddy

# Copy the built app from the build stage
COPY --from=build /app/.output/public /srv

# Copy Caddy configuration
COPY Caddyfile /etc/caddy/Caddyfile

# Expose port 80
EXPOSE 80

# Caddy automatically runs as the entrypoint
