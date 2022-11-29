FROM node:17-alpine

# Create app directory
WORKDIR /app

COPY package*.json .

RUN yarn

# Bundle app source
COPY . .

EXPOSE 5173

CMD [ "yarn", "run", "dev", "--host" ]