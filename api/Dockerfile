# Stage 1
FROM node:lts-alpine as builder
ENV NODE_ENV=development
WORKDIR /usr/src/app
RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app
COPY package*.json ./
COPY tsconfig*.json ./
COPY ./src ./src
RUN chown -R node /usr/src/app
RUN npm config set unsafe-perm true
RUN npm install --location=global typescript
USER node
RUN npm install && \
    npm run build && \
    npm run test

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
