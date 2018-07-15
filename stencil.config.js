// https://stenciljs.com/docs/config
const sass = require('@stencil/sass');

exports.config = {
  baseUrl: '/numbers',
  outputTargets: [{
    baseUrl: '/numbers',
    dir: 'docs',
    type: 'www'
  }],
  globalStyle: 'src/global/app.css',
  plugins: [
    sass({
      injectGlobalPaths: ['src/styles/_variables.scss'],
    }),
  ],
};
