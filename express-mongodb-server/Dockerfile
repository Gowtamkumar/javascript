ARG DEFAULT_PORT=3900
### Stage 1 ###
FROM node:21.6.2-alpine3.18

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install
# RUN npm run build

COPY . .

ENV PORT $DEFAULT_PORT

EXPOSE $PORT

CMD [ "npm", "run", "dev" ]