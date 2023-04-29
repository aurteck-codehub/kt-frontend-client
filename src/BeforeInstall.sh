#!/bin/bash
cd /var/www/html/production
sudo apt-get update
sudo apt-get install -y build-essential libssl-dev libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev

# Install global npm packages
sudo npm install -g pm2
sudo npm install

