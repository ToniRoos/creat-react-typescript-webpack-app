# React UI Template

UI template for web applications using react, typescript, webpack and bootstrap.

Run dev server local or with proxy to your API.


# Table of content

    1. Build
        1.1 Production build
        1.2 Development build

_______________________________________

## 1. Build

Webpack will be used for compiling and bundling the source code. 

### 1.1 Production build

For a local production build, call the following command and the sources will be compiled to the "dist"-folder. The production build will be used for the functional tests.

    npm run build


### 1.2 Development build

For a development build, call the following command and the sources will be compiled with a development server. The development server runs locally and uses a proxy to retrieve data from the server.

```sh
// uses local development server
npm run local

// uses remote development server
npm run server
```

Add proxy to receive data from your API when using npm script 'npm run server'

server.js
```js
// use proxy to get real data from API
const proxyOptions = {
    target: `http://${hostName}:${port}/`,
    changeOrigin: true
};

// add your proxy here
const backendProxy = proxy([""], proxyOptions);
```