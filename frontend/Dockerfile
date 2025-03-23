FROM node:18 AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

RUN npm run build

FROM node:18 AS production
COPY --from=build /app/build /app/build
COPY --from=build /app/node_modules /app/node_modules

EXPOSE 80
CMD ["npm", "run", "start"]