#!/bin/bash
cd /var/www/html/production
sudo npm uninstall -g npm
sudo npm install -g npm@latest
npm install husky --save-dev
sudo apt-get install git -y
git init
npm run prepare
sudo npm install -g sass
