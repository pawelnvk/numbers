// https://stenciljs.com/docs/config
const sass = require('@stencil/sass');

exports.config = {
  globalStyle: 'src/global/app.css',
  namespace: 'Numbers',
  outputTargets: [
    { type: 'www' },
    { type: 'docs' }
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['src/styles/_variables.scss'],
    }),
  ],
};
