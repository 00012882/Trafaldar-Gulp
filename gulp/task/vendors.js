const pathSource = require('../pathSource');
const {src, dest} = require('gulp');
const plumber = require('gulp-plumber');

function vendors(cb) {
  src(pathSource.src.vendors)
    .pipe(plumber())
    .pipe(dest(pathSource.build.vendors));

  return cb()
}

module.exports = vendors;
