#!/bin/bash

cd /var/www/html/production
sudo npm ci
sudo npm start
sudo npm run dev
sudo npm install react react-dom
