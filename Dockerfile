FROM node:lts-alpine

RUN apk add sudo
RUN adduser -D application sudo
RUN echo "application:necro" | chpasswd
RUN echo "application    ALL=(ALL:ALL) ALL" >> /etc/sudoers

USER application
WORKDIR /home/application/app

ENTRYPOINT tail -f /dev/null