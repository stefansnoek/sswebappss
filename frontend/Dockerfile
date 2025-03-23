FROM node:18 AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build
RUN npm run export

FROM nginx:alpine

COPY --from=build /app/.next /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]