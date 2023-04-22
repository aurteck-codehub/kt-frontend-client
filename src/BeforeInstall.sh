#!/bin/bash

cd /var/www/html/production

sudo npm uninstall -g npm
sudo npm install -g "npm@^7.0.0"

npm install husky --save-dev

sudo apt-get install git -y
git init

npm run prepare
npm install -g npm

sudo chown -R $(whoami) ~/.npm

sudo apt-get install next -y

sudo npm install -g sass
