FROM node:alpine

RUN mkdir -p /usr/src/app
ENV PORT 3000

WORKDIR /usr/src/app


COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app


# Production use node instead of root
# USER node

RUN npm i

COPY . /usr/src/app

RUN npm build

EXPOSE 3000
CMD [ "yarn", "start" ]