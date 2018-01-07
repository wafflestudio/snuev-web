FROM node:9

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json yarn.lock /usr/src/app/
COPY internals /usr/src/app/internals
RUN yarn install

COPY . /usr/src/app

CMD ["yarn start"]
