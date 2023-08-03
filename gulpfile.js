const {series, parallel} = require('gulp');
const clean = require('./gulp/task/clean');
const font = require('./gulp/task/font');
const {sprite} = require('./gulp/task/sprite');
const {styles, stylesBuild} = require('./gulp/task/styles');
const {script} = require('./gulp/task/script');
const json = require('./gulp/task/json');
const favicon = require('./gulp/task/favicon');
const vendors = require('./gulp/task/vendors');
const images = require('./gulp/task/images');
const {html, htmlBuild} = require('./gulp/task/html');
const serve = require('./gulp/task/serve');

const dev = series(favicon, font, sprite, styles, script, json, vendors, images, html);
const minify = series(favicon, font, sprite, stylesBuild, script, json, vendors, images, htmlBuild);

const buildDev = series(clean, dev);
const buildMinify = series(clean, minify);

module.exports.start = series(buildDev, serve);
module.exports.build = series(buildMinify);
