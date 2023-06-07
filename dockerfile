 FROM node:carbon
WORKDIR /app
COPY package*.json ./
RUN npm update
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "start"]