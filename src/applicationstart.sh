#!/bin/bash
sudo su
cd /var/www/html/production

pm2 start npm --name "kt-frontend-client" -- start

