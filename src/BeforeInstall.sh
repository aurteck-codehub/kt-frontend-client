#!/bin/bash
sudo su
cd /var/www/html/production
npm install -g npm@latest
nvm install node
npm install husky --save-dev
sudo apt-get install git -y
git init
npm run prepare
sudo chown -R $(whoami) ~/.npm
sudo npm install -g sass
