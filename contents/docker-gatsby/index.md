---
slug: "docker-gatsby"
date: "2020-09-12"
title: "GatsbyをDockerizeしたときのメモ"
category: ["Gatsby", "Docker"]
featuredImage: docker-gatsby.png
published: true
---

これが最適では無いと思うけど一応動作確認まで出来たやつのメモ  
後でまた更新したい

```Dockerfile
# Dockerfile

FROM node:alpine

# Also exposing VSCode debug ports
EXPOSE 8000 9929 9230

RUN \
  apk add autoconf automake libtool nasm && \
  apk add --no-cache python make g++ && \
  apk add vips-dev fftw-dev --update-cache \
  --repository http://dl-3.alpinelinux.org/alpine/edge/community \
  --repository http://dl-3.alpinelinux.org/alpine/edge/main \
  && rm -fR /var/cache/apk/*

RUN npm install -g gatsby-cli

WORKDIR /app
COPY ./package.json .
RUN yarn install && yarn cache clean
COPY . .
CMD ["yarn", "develop", "-H", "0.0.0.0" ]

```

```yml
# docker-compose.yml

version: "3"
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "8000:8000"
      - "9929:9929"
      - "9230:9230"
    volumes:
      - /app/node_modules
      - .:/app
    environment:
      - NODE_ENV=development
      - GATSBY_WEBPACK_PUBLICPATH=/
```

VSCode の Remote-containers から起動  
[参考](https://dev.to/stoutlabs/my-docker-setup-for-gatsbyjs-and-nextjs-5gao)
