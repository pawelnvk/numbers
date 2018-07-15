// https://stenciljs.com/docs/config
const sass = require('@stencil/sass');

exports.config = {
  baseUrl: '/numbers',
  globalStyle: 'src/global/app.css',
  plugins: [
    sass({
      injectGlobalPaths: ['src/styles/_variables.scss'],
    }),
  ],
};
