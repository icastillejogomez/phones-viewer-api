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
