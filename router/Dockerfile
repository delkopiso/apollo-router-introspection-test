FROM amd64/ubuntu:latest

WORKDIR /usr/src/app
RUN apt-get update && apt-get install -y \
    libssl-dev \
    curl \
    jq

COPY configuration.yaml /etc/config/configuration.yaml
COPY install.sh .
RUN chmod +x ./install.sh
RUN ./install.sh

STOPSIGNAL SIGINT

CMD [ "/usr/src/app/router", "-c", "/etc/config/configuration.yaml", "--log", "debug" ]
