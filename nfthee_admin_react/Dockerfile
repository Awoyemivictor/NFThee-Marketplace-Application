# Common build stage
FROM node:14.14.0 AS common-build-stage
WORKDIR /app
COPY package.json /app

RUN yarn install --force

COPY .env /app

COPY . /app

EXPOSE 3000

ENV NODE_ENV prod

CMD ["yarn", "start"]