FROM node:16-alpine as build

COPY . .

RUN npm ci && npm run build

FROM node:16-alpine

RUN apk add shadow

RUN useradd cnd-frontend

WORKDIR /app

COPY --from=build /node_modules ./node_modules

COPY --from=build package-lock.json .
COPY --from=build package.json .

COPY --from=build server.js .


COPY --from=build /build ./build

USER cnd-frontend

CMD node server.js