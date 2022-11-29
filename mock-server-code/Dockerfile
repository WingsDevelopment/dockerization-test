# pull node image from docker hub alpine 17
FROM node:17-alpine

RUN npm install -g nodemon

# set working directory
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

# expose port 3000
EXPOSE 3000

# start app
CMD ["npm", "run", "dev"]

