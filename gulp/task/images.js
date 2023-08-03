const pathSource = require('../pathSource');
const {src, dest} = require('gulp');
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const del = require('del');

function images(cb) {
  src(pathSource.src.images)
    .pipe(plumber())
    .pipe(imagemin([
      // imagemin.gifsicle({interlaced: true}),
      // imagemin.mozjpeg({quality: 75, progressive: true}),
      // imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    // .pipe(webp({quality: 85, method: 5}))
    .pipe(dest(pathSource.build.images));

  return cb()
}

module.exports = images;
