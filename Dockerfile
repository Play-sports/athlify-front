# Use a lightweight Node.js image
FROM node:18-alpine

WORKDIR /

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 80

CMD ["serve", "-s", "dist", "-l", "80"]
