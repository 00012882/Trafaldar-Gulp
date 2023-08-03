const pathSource = require('../pathSource');
const {src, dest} = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const shorthand = require('gulp-shorthand');
const cleanCSS = require('gulp-clean-css');
const autoPrefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");

function styles() {
  return src(pathSource.src.styles)
    .pipe(plumber())
    // .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoPrefixer({cascade: false}))
    .pipe(shorthand())
    .pipe(cleanCSS({
      level: 1,
      debug: true,
      compatibility: '*'
    }, details => {
      console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`)
    }))
    // .pipe(sourcemaps.write())
    .pipe(rename({suffix: '.min'}))
    .pipe(dest(pathSource.build.styles));
}

function stylesBuild() {
  return src(pathSource.src.styles)
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoPrefixer({cascade: false}))
    .pipe(shorthand())
    .pipe(cleanCSS({
      level: 2,
      debug: true,
      compatibility: '*'
    }, details => {
      console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`)
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(dest(pathSource.build.styles));
}

module.exports = {styles, stylesBuild};
