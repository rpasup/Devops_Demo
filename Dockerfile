FROM nginx
COPY build.zip /tmp
RUN apt-get install -y zip \
    unzip 
RUN cd /tmp && unzip build.zip -d /usr/share/nginx/html && rm build.zip
