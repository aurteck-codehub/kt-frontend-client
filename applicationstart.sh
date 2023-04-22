#!/bin/bash
cd /var/www/html/production
npm install husky --save-dev
sudo apt-get install git -y
git init
npm run prepare
npm install -g npm
npm install next
npm install -g sass
