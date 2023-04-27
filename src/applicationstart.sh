#!/bin/bash

cd /var/www/html/production
sudo yarn ci
sudo yarn add
sudo yarn start

sudo yarn run dev
sudo yarn install react react-dom
