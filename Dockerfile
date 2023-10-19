FROM node:alpine
WORKDIR ./app
COPY . .
RUN npm i
CMD ["npm","run","dev"]
EXPOSE 8001