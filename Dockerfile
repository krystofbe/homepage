FROM node:8.9.0 as node

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
RUN rm -rf build || true

COPY ./package.json /usr/src/app
COPY ./tsconfig.json /usr/src/app
COPY ./tslint.json /usr/src/app
COPY ./public /usr/src/app/public
COPY ./src /usr/src/app/src

RUN yarn install
RUN yarn build


RUN chmod -R 777 ./build/*

#==================== Setting up stage ==================== 
# Create image based on the official nginx - Alpine image
FROM nginx:1.13.7-alpine

RUN rm -rf /usr/share/nginx/html/* || true

COPY --from=node /usr/src/app/build/ /usr/share/nginx/html/

COPY ./nginx.conf /etc/nginx/conf.d/default.conf