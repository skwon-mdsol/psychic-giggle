FROM node:8

# Create app directory
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/src
WORKDIR /usr/src/app

# install dependencies
COPY package.json /usr/src/app
RUN npm install

COPY src /usr/src/app/src

EXPOSE 8765

CMD ["npm", "start"]
