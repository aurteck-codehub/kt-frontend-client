#!/bin/bash
sudo apt-get update -y
cd /var/www/html/production
sudo npm init
npm install -g pm2
sudo npm install


