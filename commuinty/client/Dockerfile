# Common build stage
FROM node:16.14.0 

WORKDIR /app

COPY package.json /app

RUN yarn install 


COPY . /app

EXPOSE 3000

ENV NODE_ENV prod

CMD ["yarn", "dev"]