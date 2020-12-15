FROM node:10.15-alpine

WORKDIR /usr/src/hipages/server

COPY package*.json ./

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "start:dev"]
