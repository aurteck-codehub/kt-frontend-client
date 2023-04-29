#!/bin/bash
cd /var/www/html/production
sudo npm install -g npm@latest
sudo npm install
sudo apt-get install git -y
git init
sudo npm install next

