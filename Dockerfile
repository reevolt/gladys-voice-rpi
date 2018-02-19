FROM arm32v7/node

RUN apt-get update && apt-get install -y sox libsox-fmt-all libatlas-base-dev mpg321

ADD gladys-voice /src

WORKDIR /src/gladys-voice

RUN npm install

RUN npm install -g pm2

ENTRYPOINT pm2 start app.js --name gladys-voice