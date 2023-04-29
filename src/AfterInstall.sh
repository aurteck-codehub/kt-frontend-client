#!/bin/bash
cd /var/www/html/production
export PATH="$PATH:/var/www/html/production/node_modules/next/"
 sudo npm run dev
 sudo  npm run build
 




