#!/bin/bash
sudo apt-get update -y
cd /var/www/html/production
export PATH=$PATH:/usr/lib/node_modules
sudo npm install -g pm2
sudo npm install

