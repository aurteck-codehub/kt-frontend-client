#!/bin/bash
cd /var/www/html/production
npm install husky --save-dev
sudo apt-get install git -y
git init
npm run prepare
sudo apt-get install npm
sudo chown -R $(whoami) ~/.npm
sudo apt-get install next -y
sudo npm install -g sass
