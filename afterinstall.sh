#!/bin/bash
export NVM_DIR="/root/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
cd /usr/share/nginx/html
/root/.nvm/versions/node/v18.16.0/bin/sudo apt-get install git -y
/root/.nvm/versions/node/v18.16.0/bin/git init
/root/.nvm/versions/node/v18.16.0/bin/npm install
/root/.nvm/versions/node/v18.16.0/bin/npm install next
/root/.nvm/versions/node/v18.16.0/bin/npm install -g sass
/root/.nvm/versions/node/v18.16.0/bin/npm run dev


