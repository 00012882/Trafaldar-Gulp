const pathSource = require('../pathSource');
const {src, dest} = require('gulp');
const plumber = require('gulp-plumber');

function fonts(cb) {
  src(pathSource.src.font)
    .pipe(plumber())
    .pipe(dest(pathSource.build.font));

  return cb()
}

module.exports = fonts;
