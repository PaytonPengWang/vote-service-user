FROM daocloud.io/node:8.4.0

RUN mkdir /app
ADD ./ /app
WORKDIR /app
RUN yarn install
RUN npm run build

EXPOSE 3000

CMD npm run start
