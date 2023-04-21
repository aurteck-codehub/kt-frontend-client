#!/bin/bash
cd /usr/share/nginx/html
/root/.nvm/versions/node/v18.16.0/bin/npm install
/root/.nvm/versions/node/v18.16.0/bin/npm run build
/root/.nvm/versions/node/v18.16.0/bin/npm install next
/root/.nvm/versions/node/v18.16.0/bin/npm install -g sass
/root/.nvm/versions/node/v18.16.0/bin/npm run dev
yarn dev


