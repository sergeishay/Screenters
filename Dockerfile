FROM node:10-alpine as build

# RUN apk update && apk upgrade && \
#   apk add --no-cache bash git openssh yarn

RUN mkdir /app

WORKDIR /app

COPY . .

RUN npm install --save mdbreact
RUN npm install

# RUN yarn install

RUN npm run build

EXPOSE 3000

ENV SERVER_PORT=3000
ENV API_PORT=3001

CMD [ "npm", "start" ]

# ---------------

# FROM node:10-alpine

# RUN mkdir -p /app/build

# RUN apk update && apk upgrade && apk add yarn git

# WORKDIR /app

# COPY --from=build /app/package.json .

# RUN yarn install --production

# RUN npm run build

# COPY --from=build /app/build ./build
# COPY --from=build /app/src/auth_config.json ./src/auth_config.json
# COPY --from=build /app/server.js .
# COPY --from=build /app/api-server.js .

# EXPOSE 3000
# EXPOSE 3001

# ENV SERVER_PORT=3000
# ENV API_PORT=3001
# ENV NODE_ENV production

# CMD ["yarn", "prod"]
