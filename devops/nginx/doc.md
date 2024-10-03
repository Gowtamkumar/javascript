## introducetion to web server(nginx)

nginx: default port: 80
mysql: default port: 3306
postgresql: default port: 5432
mongodb: default port: 27017
server start:
commond: sudo systemctl start nginx.service
server stop:
commond: sudo systemctl stop nginx.service
find ip server address: ip a
commond: lsof -i -t:80
find ip address for all commond: netstat -tulpn

if you change file name then:
sudo mv index.html index.backup

nginx config:
cd /etc/nginx/sites-availeable
cd /var/www/html/

configaration thik ache ki na check:
sudo nginx -t

site-available path a open file then:
file a root /var/www/html; ai file thake site live hoy.

web server configaration:

muloto modules-available, sites-available, nginx.conf, sites-enable this is configaration file
but we are not change in ngianx.conf
new site add korte hole kaj korte hobe sites-available then gowtamkumar.com file create then activate kora lage same file site-enable create korte hobe. commond: sudo cp gowtamkumar.com /etc/nginx/sites-enabled/
then site-available default confiation server object copy kore site-available moddha gowtamkumar.com paste kore hobe
then server moddha ja server_name ache sekhane domin name or ip address input kore hobe
then site-enable folder ja gowtamkumar.com ache seta te hat dibo na.
then site-available moddha gowtamkumar.com ar akta soft link create korte hobe.
soft link create commond: sudo ln -s /etc/enginx/sites-available/gowtamkumar.com /etc/nginx/sites-enabled/
jodi error hoy tahole site-snabled thake gowtamkumar.com remove kore then abr commend dite hobe.
then check by cat commond: cat /etc/nginx/sites-enabled/

main domin set:
  /var/www/html/ ja name file/folder kori na kano /etc/nginx/site-available nano default /var/www/html ata change kore
  jodi /var/www/html/gowtam kore dile root http://192.168.1.202/ viste korle root hisaba visite hobe

virtual host configuration web server with multiple application: 
  /etc/nginx/sites-available moddha ja gowtamkumar.com enginx configration ditehobe proxcy modda. we can searech google and chatgpt for configaration;

 execute able access commond: sudo chmod +x deployment.sh 
  execute commomd: ./deployment.sh