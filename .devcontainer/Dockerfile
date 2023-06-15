# Use the official Node 18 image from Docker Hub
FROM node:18

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install && yarn global add expo-cli

COPY . .

EXPOSE 19000 19001 19002