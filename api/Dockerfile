FROM node:latest
MAINTAINER Hovig Ohannessian <hovigg@hotmail.com>
WORKDIR /opt/api
COPY package.json ./
RUN  npm install
COPY . .
EXPOSE 3000
CMD ["node", "app"]
