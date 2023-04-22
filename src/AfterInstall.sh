#!/bin/bash
cd /var/www/html/production
export NVM_DIR="/root/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
sudo chown -R ubuntu:ubuntu /root/.nvm   
sudo chmod -R 755 /root/.nvm
sudo /root/.nvm/versions/node/v18.16.0/bin/npm install husky --save-dev
sudo /root/.nvm/versions/node/v18.16.0/bin/apt-get install git -y
sudo /root/.nvm/versions/node/v18.16.0/bin/npm run prepare
sudo /root/.nvm/versions/node/v18.16.0/bin/git init
sudo /root/.nvm/versions/node/v18.16.0/bin/next dev
sudo /root/.nvm/versions/node/v18.16.0/bin/next build
sudo /root/.nvm/versions/node/v18.16.0/bin/next start
sudo /root/.nvm/versions/node/v18.16.0/bin/npm run build
sudo /root/.nvm/versions/node/v18.16.0/bin/chmod +x next
sudo /root/.nvm/versions/node/v18.16.0/bin/npm install -g sass
sudo /root/.nvm/versions/node/v18.16.0/bin/npm run build
sudo /root/.nvm/versions/node/v18.16.0/bin/npm run dev
