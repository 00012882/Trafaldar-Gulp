const pathSource = require('../pathSource');
const {src, dest} = require('gulp');
const plumber = require('gulp-plumber');

function favicon(cb) {
  src(pathSource.src.favicon)
    .pipe(plumber())
    .pipe(dest(pathSource.build.favicon));

  return cb()
}

module.exports = favicon;
