
FROM node:latest
MAINTAINER Hovig Ohannessian <hovigg@hotmail.com>
WORKDIR /opt/app
COPY package.json ./
RUN  npm install
COPY . .
EXPOSE 5100
CMD ["node", "app"]
