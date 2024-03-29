FROM node:20.12.0-slim

RUN apt-get update -y \
    && apt-get upgrade -y \
    && apt-get autoremove -y \
    && apt-get install -y git \
    && npm i -g @nestjs/cli@10.3.2