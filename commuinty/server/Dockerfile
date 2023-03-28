# Common build stage
FROM node:16.16.0

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . /app

EXPOSE 8080

CMD ["yarn", "start"]