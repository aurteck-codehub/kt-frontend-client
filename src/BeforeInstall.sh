#!/bin/bash
sudo su
cd /var/www/html/production
npm install -g npm@latest
nvm install node
sudo apt-get install git -y
git init
sudo chown -R $(whoami) ~/.npm
sudo npm install -g sass
