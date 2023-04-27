#!/bin/bash

cd /var/www/html/production
 yarn install --frozen-lockfile
 sudo yarn build
sudo yarn dev
sudo yarn install react react-dom
