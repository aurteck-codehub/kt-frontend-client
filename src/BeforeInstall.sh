#!/bin/bash
sudo apt-get update -y
cd /var/www/html/production
cp package.json /var/www/html/production/
sudo npm install -g pm2
sudo npm install

