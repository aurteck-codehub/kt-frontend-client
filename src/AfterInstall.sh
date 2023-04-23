#!/bin/bash

cd /home/ubuntu/frontend
export PATH="$PATH:/root/.nvm/versions/node/v18.16.0/bin/"
sudo chown -R ubuntu:ubuntu /root/.nvm   
sudo chmod -R 755 /root/.nvm
sudo /root/.nvm/versions/node/v18.16.0/bin/npm install husky --save-dev
sudo /usr/bin/git init
sudo /usr/local/bin/npm run prepare
sudo /usr/local/bin/next dev
sudo /usr/local/bin/next build
sudo /usr/local/bin/next start
sudo /usr/local/bin/npm run build
sudo /usr/local/bin/chmod +x next
sudo /usr/local/bin/npm install -g sass
sudo /usr/local/bin/next build
sudo /usr/local/bin/npm run dev
sudo npm install react react-dom
