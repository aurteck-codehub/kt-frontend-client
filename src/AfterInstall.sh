#!/bin/bash
cd /var/www/html/production
export NVM_DIR="/root/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
/root/.nvm/versions/node/v18.16.0/bin/npm install husky --save-dev
/root/.nvm/versions/node/v18.16.0/bin/sudo apt-get install git -y
/root/.nvm/versions/node/v18.16.0/bin/npm run prepare
/root/.nvm/versions/node/v18.16.0/bin/git init
/root/.nvm/versions/node/v18.16.0/bin/next dev
/root/.nvm/versions/node/v18.16.0/bin/next build
/root/.nvm/versions/node/v18.16.0/bin/next start
/root/.nvm/versions/node/v18.16.0/bin/npm run build
/root/.nvm/versions/node/v18.16.0/bin/npm install next
/root/.nvm/versions/node/v18.16.0/bin/npm install -g sass
/root/.nvm/versions/node/v18.16.0/bin/npm run build
/root/.nvm/versions/node/v18.16.0/bin/npm run dev
