#!/bin/bash
sudo apt-get update -y
cd /var/www/html/production
export PATH="$PATH:/var/www/html/production/node_modules/next/"
sudo npm install

