#!/bin/bash

cd /var/www/html/production
 sudo yarn install --frozen-lockfile
 sudo npm install -g yarn
 sudo yarn add
 sudo yarn build
 sudo npm ci
sudo yarn dev
sudo yarn install react react-dom
