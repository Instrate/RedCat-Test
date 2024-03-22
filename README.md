# Fans CRM test task
## **Summary**:
* [Info](#info)
* [Launch](#launch)

## Info

* Framework: **NestJS**
* Node version: **20 lts**
* Database: **`PostreSQL v16.2`** _aka_ **`postgres:16-alpine` on docker hub**

## Launch
### Summary:
* [Database](#database)
* [Direct](#direct)
* [Docker](#docker)

### Database:

* Description:
> For local development docker image `postgres:16-alpine` was used

* Getting the image:

```bash
docker pull postgres:16-alpine
```

* Running database container:

##### Note that the name of the: 
* `container name` **>** ``--name ...``
* exposed `port` **>** ``-p ...:5432``
* `password` **>** ``-e POSTGRES_PASSWORD=...`` 
* `database name` **>** ``-e POSTGRES_DB=...``

are recommended to be changed before executing this command

```bash
docker run --name postgres-test-c -p 8080:5432 -e POSTGRES_PASSWORD=<custom_pwd> -e POSTGRES_DB=redcat-local-test  -d postgres:16-alpine
```
##### Default username for database is `root`

### Direct:
* Prepare:

```bash
npm i -g @nestjs/cli & npm i
```
<hr/>

* Run:

```bash
npm run start
```
<hr/>

* Build:

```bash
npm run build
```

### Docker:
* Run:

```bash
docker-compose up -d --build
```
<hr/>

* Close:

```bash
docker-compose down --rmi all -v
```
