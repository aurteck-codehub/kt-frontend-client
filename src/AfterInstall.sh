#!/bin/bash
cd /var/www/html/production
npm install sharp

pm2 start npm --name "kt-frontend-client" -- start
 




