#!/bin/bash

cd /var/www/html/production
sudo yarn ci
 sudo yarn install --frozen-lockfile
 sudo yarn add
 sudo yarn build
sudo yarn dev
sudo yarn install react react-dom
