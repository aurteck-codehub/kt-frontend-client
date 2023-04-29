#!/bin/bash
cd /var/www/html/production
export PATH="$PATH:/var/www/html/production/node_modules/.bin/"
sudo npm install
sudo npm install next

