FROM node:14.15.4-alpine

RUN mkdir -p /src/app
WORKDIR /src/app
COPY package.json yarn.lock ./
RUN yarn install

COPY . ./

EXPOSE 3000

CMD ["yarn", "start"]