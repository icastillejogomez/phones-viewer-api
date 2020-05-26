# Phones Viewer API

This repository constains a technical probe with React Native

### Prerequisites

You need Node.js with npm in your computer to run this project. If you need to install it see [this page](https://nodejs.org/es/) 

### Server Port

The server is going to listen on port 8080, change Dockerfile exposed port, PORT env var & update the package.json scripts to create the container with the correct mapping port

### Running test

```sh
$ yarn install
or
$ npm install

$ yarn test
or
$ npm run test

yarn run v1.22.4
$ mocha -r ts-node/register tests/**/*.spec.ts


  fetchMobiles
    ✓ should return first phone only when offset and limit are 1
    ✓ should return two objects when call with offset=0 and limit = 2
    ✓ should not return any value when call with offset = 1000 and limit = 10

  API: phones
    GET /
      ✓ should return the first 5 phones
      ✓ should get a single phone
      ✓ should not get a single student record
      ✓ should return 404 response if request index API URI /


  7 passing (60ms)

✨  Done in 1.82s.
```

## Run on Docker

### Create Docker build

```sh
$ yarn docker:build
or
$ npm run docker:build
```

### Run API Container

```sh
$ yarn docker:run
or
$ npm run docker:run
```

### See API logs

```sh
$ yarn docker:logs
or
$ npm run docker:logs
```

## Run in Node


### Install dependencies

```sh
$ yarn install
or
$ npm i
```

### Check lint

```sh
$ yarn lint
or
$ npm run lint
```

### Typescript compiler

```sh
$ yarn compile
or
$ npm run compile
```

### Run API

```sh
$ yarn start
or
$ npm run start
```
