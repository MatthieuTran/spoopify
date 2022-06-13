# Stage 1
FROM node:lts-alpine as builder
ARG MONGO_TEST_URI
ENV NODE_ENV=development
ENV MONGO_TEST_URI=$MONGO_TEST_URI
WORKDIR /usr/src/app
RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app
COPY package*.json ./
COPY tsconfig*.json ./
COPY ./src ./src
RUN chown -R node /usr/src/app
RUN npm config set unsafe-perm true
USER node
RUN npm install && \
    npm run test && \
    npm run build

# Stage 2
FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app
COPY package*.json ./
RUN chown -R node /usr/src/app
USER node
RUN npm ci --only=production --production --silent
COPY --from=builder ./usr/src/app/dist ./dist

EXPOSE 3000
CMD ["npm", "run", "start"]
