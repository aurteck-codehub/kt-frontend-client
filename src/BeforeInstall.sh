#!/bin/bash
cd /var/www/html/production
npm install husky --save-dev
sudo apt-get install git -y
git init
sudo apt-get install npm -y
npm run prepare
npm install -g npm
sudo chown -R $(whoami) ~/.npm
sudo apt-get install next -y
sudo npm install -g sass

