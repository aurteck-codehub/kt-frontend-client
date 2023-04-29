#!/bin/bash
cd /var/www/html/production
 sudo npm run prepare
 

 sudo npm run build
 
 sudo npm install -g sass
 
 sudo npm run dev
 sudo npm install react react-dom
 sudo yarn install --frozen-lockfile



