FROM node:14
WORKDIR /Users/davissmith/Projects/spotifyApp
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
