#!/bin/bash

cd /var/www/html/production
pm2 -f start kt-frontend-client
