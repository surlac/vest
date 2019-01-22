# Vest front-end

## Creating project
https://serverless.com/framework/docs/providers/aws/guide/services/

```
npm install -g serverless
serverless create --template aws-nodejs --path myService
```

## Creating functions
https://github.com/SC5/serverless-mocha-plugin

Add the plugin to serverless.yml:

```
plugins:
  - serverless-mocha-plugin
```

```
npm install --save-dev serverless-mocha-plugin
sls create function -f update --handler functions/update/index.handler
```

## Deploy to aws for testing
```
serverless deploy
```

## Remove from aws
```
serverless remove
```

## eslint
http://eslint.org/docs/user-guide/command-line-interface

Linting tools like ESLint allow developers to discover problems with their JavaScript code without executing it.

```
npm i -g eslint
eslint .
```

## invoke local
```
serverless invoke local --function create --path events/create.json

```


## invoke unit tests with coverage
npm run-script test-with-coverage


## invoke eslint
npm run-script eslint