# Use the official Nginx image as the base
FROM nginx:latest

# Copy your local index.html to the Nginx default hosting directory
COPY . .

# Expose port 80 so we can access the web server
EXPOSE 80
