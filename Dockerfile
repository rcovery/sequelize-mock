FROM node:lts-alpine

RUN apk add sudo

USER node
WORKDIR /home/node/app

ENTRYPOINT tail -f /dev/null