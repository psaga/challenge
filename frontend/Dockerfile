FROM node:latest as builder

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . ./

FROM builder as dev
CMD ["npm", "run", "dev"]


