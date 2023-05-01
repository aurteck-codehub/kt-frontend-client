#!/bin/bash

sudo apt-get update -y
cd /var/www/html/production
sudo npm install -g pm2
sudo cp /usr/lib/node_modules/npm/package.json /var/www/html/production
sudo npm install
