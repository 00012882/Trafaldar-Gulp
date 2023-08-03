const pathSource = require('../pathSource');
const {src, dest} = require('gulp');
const plumber = require('gulp-plumber');
// const rigger = require('gulp-rigger');
const include = require('gulp-include');
// const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-html-minifier-terser');
// const prettify = require('gulp-html-prettify');

function html(cb) {
  src(pathSource.src.html)
    .pipe(plumber())
    // .pipe(fileinclude({
    //     prefix: '@@',
    //     basepath: '@file'
    // }))
    // .pipe(rigger())
    .pipe(include())
      .on('error', console.log)
    // .pipe(prettify({indent_char: ' ', indent_size: 2}))
    .pipe(dest(pathSource.build.html));

  return cb();
}

function uzHtml(cb) {
  src(pathSource.src.uzHtml)
    .pipe(plumber())
    // .pipe(fileinclude({
    //     prefix: '@@',
    //     basepath: '@file'
    // }))
    // .pipe(rigger())
    .pipe(include())
      .on('error', console.log)
    // .pipe(prettify({indent_char: ' ', indent_size: 2}))
    .pipe(dest(pathSource.build.uzHtml));

  return cb();
}

function enHtml(cb) {
  src(pathSource.src.enHtml)
    .pipe(plumber())
    // .pipe(fileinclude({
    //     prefix: '@@',
    //     basepath: '@file'
    // }))
    // .pipe(rigger())
    .pipe(include())
      .on('error', console.log)
    // .pipe(prettify({indent_char: ' ', indent_size: 2}))
    .pipe(dest(pathSource.build.enHtml));

  return cb();
}

function htmlBuild(cb) {
  src(pathSource.src.html)
    .pipe(plumber())
    // .pipe(fileinclude({
    //     prefix: '@@',
    //     basepath: '@file'
    // }))
    // .pipe(rigger())
    .pipe(include())
      .on('error', console.log)
    .pipe(htmlmin({
      caseSensitive: true,
      collapseWhitespace: true,
      conservativeCollapse: true,
      continueOnParseError: true,
      preserveLineBreaks: true,
      preventAttributesEscaping: true,
      removeComments: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      minifyJS: true,
      minifyCSS: true
    }))
    .pipe(dest(pathSource.build.html));

  return cb();
}

module.exports = {html, uzHtml, enHtml, htmlBuild};
