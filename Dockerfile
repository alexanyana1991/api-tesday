FROM node:alpine

WORKDIR /api-testday-api

COPY package*.json ./

COPY /src/db/prisma ./prisma/

COPY .env ./

COPY . . 

RUN npm install

RUN npx prisma generate

EXPOSE 8080

CMD ["npm", "run", "docker"]