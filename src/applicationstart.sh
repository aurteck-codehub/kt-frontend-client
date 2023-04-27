#!/bin/bash

cd /var/www/html/production
sudo yarn ci
sudo yarn add
sudo yarn start
sudo PORT = 4000 yarn dev 
sudo yarn install react react-dom
