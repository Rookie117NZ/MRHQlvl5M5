FROM node:16 AS Production 

ENV NODE_ENV=production

WORKDIR /src/metroproperty

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000
CMD [ "sh", "-c", "src/index.js"]
