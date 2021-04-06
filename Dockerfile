FROM node:14.16.0
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY index.js /app/index.js

CMD [ "node", "index.js" ]