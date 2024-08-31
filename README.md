# bff-sample

This is a sample application for BFF(Backend for Frontend).

## Requirement
- Docker Desktop
- VSCode & Dev Container Extension

※The maintainer uses codespaces.

## Tech Stack
- TypeScript
- NestJS
- GraphQL

## How to start

```
# @./app
# First time only
$ npm ci

$ npm run start
```

Then get access to http://localhost:3000/graphql .

## System

### Middleware
- requestIdAppender: Add request id, 'Req-Id', to each request header.
- accessLogger: Log each request information.

### Guard
- AuthGuard: Verify 'api-key' in request header.

### Interceptor
- PerformanceInterceptor: Log performance of each request.

### Module
- UsersModule: A sample module
