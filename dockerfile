# The Base Image
FROM nginx:1.18.0-alpine

WORKDIR ./

ENV PATH ./node_modules/.bin:$PATH

COPY package.json ./

COPY package-lock.json ./

RUN npm install

CMD ["npm', "start"]

