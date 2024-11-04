# Use the alpine-based image with Node.js
FROM node:22.11.0-alpine3.19
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4321
CMD ["npm", "run", "dev", "--", "--host"]
