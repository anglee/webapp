requirejs.config({
  baseUrl: '.',
  paths: {
    app: './app',
    lodash: './bower_components/lodash/dist/lodash',
    q: './bower_components/q/q'
  }
});

requirejs(['app/main']);
