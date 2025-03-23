FROM node:18 AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

FROM node:18

COPY --from=build /app /app
COPY --from=build /.next /app

EXPOSE 80
CMD ["npm", "run", "start"]