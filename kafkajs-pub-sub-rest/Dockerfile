FROM node:alpine3.11

WORKDIR /src/app/kafka-pub-rest

COPY . .

RUN npm i

EXPOSE 9000

CMD [ "node", "boot.js" ]