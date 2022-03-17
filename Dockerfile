FROM node:lts-alpine AS builder
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY codegen-*.yml ./
COPY tsconfig.json .

FROM builder AS gateway
CMD ["npm", "run", "generate:gateway"]

FROM builder AS router
CMD ["npm", "run", "generate:router"]
