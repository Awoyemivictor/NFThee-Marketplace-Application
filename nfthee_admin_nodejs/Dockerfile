# Common build stage
FROM node:14 as common-build-stage
WORKDIR /app
COPY package.json /app

RUN yarn install

COPY .env /app

COPY . /app

EXPOSE 8004

# Development build stage
# FROM common-build-stage as development-build-stage

# ENV NODE_ENV local

# CMD ["yarn", "dev"]

# Production build stage
FROM common-build-stage as production-build-stage

ENV NODE_ENV prod

CMD ["yarn",  "start"]