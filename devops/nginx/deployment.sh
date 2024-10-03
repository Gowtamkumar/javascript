# we can autometation deployment by this shall
#!/bin/bash

sudo apt update
sudo apt install git -y
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
# clone github repository
sudo git clone githuburl /var/www/html/gowtam
# home thake default.conf copy kore nginx sites-available default replace kore dibe.
# first site-available default configratin kore nite hobe
sudo cp /home/ubontu_server/default.conf /etc/nginx/sites-available/default
sudo systemctl restart nginx