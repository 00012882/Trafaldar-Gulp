const pathSource = require('../pathSource');
const {src, dest} = require('gulp');
const plumber = require('gulp-plumber');

function json(cb) {
  src(pathSource.src.json)
    .pipe(plumber())
    .pipe(dest(pathSource.build.json));

  return cb()
}

module.exports = json;
