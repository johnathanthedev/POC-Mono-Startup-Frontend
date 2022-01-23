FROM node:alpine
WORKDIR "/usr/poc-mono-startup-frontend"
COPY package.json .
RUN npm install
COPY . .