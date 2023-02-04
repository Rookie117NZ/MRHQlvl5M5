FROM node:16@sha256:367b3b89399e6bd52746180c7b348c313015fc637d06a1f0e0ccb983fd52bfd1 AS Production 

ENV NODE_ENV=production

WORKDIR /metroproperty/src

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
