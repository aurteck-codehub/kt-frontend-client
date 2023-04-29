#!/bin/bash
cd /var/www/html/production
npm install sharp
sudo  npm run build

pm2 start npm --name "kt-frontend-client" -- start
 




