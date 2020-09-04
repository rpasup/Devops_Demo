FROM nginx
COPY build.zip /tmp
RUN cd /tmp && unzip build.zip -d /usr/share/nginx/html && rm build.zip
