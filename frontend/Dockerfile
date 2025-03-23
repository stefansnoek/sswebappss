FROM node:18 AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

FROM node:18 AS production
RUN npm run build
COPY --from=build /app/build /app/build
COPY --from=build /app/node_modules /app/node_modules

EXPOSE 80
CMD ["npm", "run", "start"]