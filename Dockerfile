FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies and build sqlite3 from source if needed
# We install python3 and build-essential for sqlite3 compilation just in case
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*
RUN npm install

# Copy all source files
COPY . .

# Build the Vite frontend
RUN npm run build

# Expose the port
EXPOSE 7860

# Tell Node.js to use the exposed port
ENV PORT=7860

# Start the Node.js server
CMD ["npm", "start"]
