# Use the official Nginx image as the base
FROM nginx:latest

# Copy your local index.html to the Nginx default hosting directory
COPY index.html /usr/share/nginx/html/index.html

# Expose port 80 so we can access the web server
EXPOSE 80
