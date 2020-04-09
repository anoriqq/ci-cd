FROM node:12.16.2-alpine3.11

ENV APP_ROOT /usr/src/app
WORKDIR $APP_ROOT

ENV YAEN_VERSION 1.22.4
RUN yarn policies set-version $YAEN_VERSION

COPY package.json $APP_ROOT
COPY yarn.lock $APP_ROOT
RUN yarn install

COPY src/ $APP_ROOT/src/
COPY webpack.common.js $APP_ROOT
COPY webpack.prod.js $APP_ROOT
COPY tsconfig.json $APP_ROOT
RUN yarn run build

CMD [ "node", "dist/server.js" ]
