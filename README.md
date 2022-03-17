# Apollo Router introspection test

This project is set up to compare the introspection resolution differences between Apollo Gateway and Apollo Router.

The instructions below are geared towards using docker, but feel free to run the services and tasks locally as you see fit.

## Getting Started

- Define environment variables for accessing Apollo Studio graphs:
```shell
cp -n .env.sample .env
```

- Edit `.env` to have valid values for the `*_APOLLO_KEY` and `*_APOLLO_GRAPH_REF` variables.

- Build the docker images needed:
```shell
docker compose build
```

- Start the gateway and router services
```shell
docker compose up -d gateway router
```

- Run the generation command for the gateway/router:
```shell
docker compose run --rm generate-gateway
docker compose run --rm generate-router
```
