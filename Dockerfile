FROM node:lts-stretch

WORKDIR /usr/src/app

COPY package.json package.json
#COPY package-lock.json package-lock.json

RUN npm install yarn
RUN yarn install

COPY . /usr/src/app
RUN yarn run build

EXPOSE 8000
CMD [ "yarn", "start" ]
