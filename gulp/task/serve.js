const {watch, series, src} = require('gulp');
const {html, uzHtml, enHtml} = require('./html');
const {sprite} = require('./sprite');
const {styles} = require('./styles');
const {script} = require('./script');
const vendors = require('./vendors');
const images = require('./images');
const json = require('./json');
const font = require('./font');
const pathSource = require('../pathSource');

const server = require('browser-sync').create();

function readyReload(cb) {
  server.reload();
  cb();
}

module.exports = function serve(cb) {
  server.init({
    port: 7000,
    server: 'dist',
    notify: false,
    open: true,
    cors: true
  });

  watch(pathSource.watch.html, series(html, readyReload));
  watch(pathSource.watch.uzHtml, series(uzHtml, readyReload));
  watch(pathSource.watch.enHtml, series(enHtml, readyReload));
  watch(pathSource.watch.vendors, series(vendors, readyReload));
  watch(pathSource.watch.json, series(json, readyReload));
  watch(pathSource.watch.font, series(font, readyReload));
  watch(pathSource.watch.sprite, series(sprite, readyReload));
  watch(pathSource.watch.images, series(images, readyReload));
  watch(pathSource.watch.styles, series(styles, cb => src(pathSource.build.styles).pipe(server.stream()).on('end', cb)));
  watch(pathSource.watch.script, series(script, readyReload));

  return cb();
};
