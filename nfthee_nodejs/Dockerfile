# Common build stage
FROM node:14 as common-build-stage

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY .env.local /app

COPY .env /app

COPY . /app

EXPOSE 8002

# Development build stage
# FROM common-build-stage as development-build-stage

# ENV NODE_ENV local

# CMD ["npm", "run", "dev"]

# Production build stage
FROM common-build-stage as production-build-stage

ENV NODE_ENV prod

CMD ["yarn", "start"]