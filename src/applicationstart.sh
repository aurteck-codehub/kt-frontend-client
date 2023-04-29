#!/bin/bash
cd /var/www/html/production

pm2 start npm --name "kt-frontend-client" -- start

