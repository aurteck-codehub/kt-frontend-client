#!/bin/bash

cd /var/www/html/production
sudo chmod +x /var/www/html/production/
pm2 start /var/www/html/production/kt-frontend-client

