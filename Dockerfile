FROM node:carbon

# crete app directory
WORKDIR /usr/src/app

# install app dependencies
COPY package*.json ./

RUN npm install

# bundle app source
COPY . .
EXPOSE 8080

CMD [ "npm", "start" ]