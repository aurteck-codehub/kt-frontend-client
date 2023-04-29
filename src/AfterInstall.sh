#!/bin/bash
cd /var/www/html/production
npm install sharp
export PATH="$PATH:/usr/lib/node_modules/pm2/bin"
pm2 start npm --name "kt-frontend-client" -- start
 




