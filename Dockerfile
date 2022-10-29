FROM node:12.14-alpine as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install

RUN npm run build


FROM nginx:latest

COPY --from=build /usr/local/app/dist/crudtuto-Front /usr/share/nginx/html

EXPOSE 80
