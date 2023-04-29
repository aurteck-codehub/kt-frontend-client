#!/bin/bash
cd /var/www/html/production
sudo chmod -R 755 /var/www/html/production
npm install sharp
sudo  npm run build
 




