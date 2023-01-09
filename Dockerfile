FROM node:16@sha256:64e8bcdfdad6718050801a2639f7e6645fdaf85ec37a98cdb61f6a5331217618 AS Production 

ENV NODE_ENV=production

WORKDIR /src/metroproperty

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

CMD [ "node", "src/index.js"]
EXPOSE 3000