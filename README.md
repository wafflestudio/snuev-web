# SNUEV web

This codebase is SNUEV client, a course evaluation system for SNU students.

If you have questions about the service, please contact via [master@wafflestudio.com](mailto:master@wafflestudio.com).

We are currently not open to contribution, but will prepare contribution guide soon.

## Getting started

### Setting environment

Make '.env' file in the root folder.

> .env
```
API_HOST=https://api.snuev.kr
```

### Running locally

To be updated

### Running locally using docker compose

```
docker-compose build
docker-compose run app yarn
```

Once you run the codes, you are ready to use SNUEV.

And you need to run the following code whenever you want to use it.

```
docker-compose up
```

Then the client will be running at http://localhost:3000.
