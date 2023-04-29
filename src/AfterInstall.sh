#!/bin/bash
cd /var/www/html/production
export PATH="$PATH:/root/.nvm/versions/node/v19.9.0/bin/"
chown -R ubuntu:ubuntu /root/.nvm 
export PATH="$PATH:$(yarn global bin)"
chmod -R 755 /root/.nvm
/root/.nvm/versions/node/v18.16.0/bin/npm install husky --save-dev
/usr/bin/git init
 /usr/local/bin/npm run prepare
 /usr/local/bin/next dev
 /usr/local/bin/next build
 /usr/local/bin/next start
 /usr/local/bin/npm run build
 /usr/local/bin/chmod +x next
 /usr/local/bin/npm install -g sass
 /usr/local/bin/next build
 /usr/local/bin/npm run dev
 npm install react react-dom
 yarn install --frozen-lockfile


