FROM nginx:alpine

COPY ./src /usr/share/nginx/html

COPY nginx-conf/local.conf /etc/nginx/conf.d/default.conf

EXPOSE  80
