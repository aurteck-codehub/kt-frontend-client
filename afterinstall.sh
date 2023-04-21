#!/bin/bash
sudo apt-get install git -y
git init
export NVM_DIR="/root/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
cd /usr/share/nginx/html
/root/.nvm/versions/node/v18.16.0/bin/npm install
/root/.nvm/versions/node/v18.16.0/bin/npm install next
/root/.nvm/versions/node/v18.16.0/bin/npm install -g sass
/root/.nvm/versions/node/v18.16.0/bin/npm run dev


