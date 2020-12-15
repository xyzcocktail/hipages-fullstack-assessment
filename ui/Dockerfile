FROM node:10.15-alpine

WORKDIR /usr/src/hipages/ui

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
