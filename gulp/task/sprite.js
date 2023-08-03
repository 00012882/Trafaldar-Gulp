const pathSource = require('../pathSource');
const {src, dest} = require('gulp');
const plumber = require('gulp-plumber');
const svgSprite = require('gulp-svg-sprite');
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');

function sprite(cb) {
  src(pathSource.src.sprite)
    .pipe(plumber())
    .pipe(svgmin({
      js2svg: {
        pretty: true
      }
    }))
    .pipe(cheerio({
      run: function ($) {
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
        $('[id]').removeAttr('id');
      },
      parserOptions: {xmlMode: true}
    }))
    .pipe(replace('&gt;', '>'))
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: "../sprite.html",
        }
      }
    }))
    .pipe(replace('<?xml version="1.0" encoding="utf-8"?>', ''))
    .pipe(dest(pathSource.build.sprite));

  return cb()
}

function spriteAdvantages(cb) {
  src(pathSource.src.spriteAdvantages)
    .pipe(plumber())
    .pipe(svgmin({
      js2svg: {
        pretty: true
      }
    }))
    .pipe(cheerio({
      run: function ($) {
        $('[style]').removeAttr('style');
        $('[id]').removeAttr('id');
      },
      parserOptions: {xmlMode: true}
    }))
    .pipe(replace('&gt;', '>'))
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: "../sprite-advantages.html",
        }
      }
    }))
    .pipe(replace('<?xml version="1.0" encoding="utf-8"?>', ''))
    .pipe(dest(pathSource.build.spriteAdvantages));

  return cb()
}

function spriteLang(cb) {
  src(pathSource.src.spriteLang)
    .pipe(plumber())
    .pipe(svgmin({
      js2svg: {
        pretty: true
      }
    }))
    .pipe(cheerio({
      run: function ($) {
        $('[id]').removeAttr('id');
      },
      parserOptions: {xmlMode: true}
    }))
    .pipe(replace('&gt;', '>'))
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: "../sprite-lang.html",
        }
      }
    }))
    .pipe(replace('<?xml version="1.0" encoding="utf-8"?>', ''))
    .pipe(dest(pathSource.build.spriteLang));

  return cb()
}

module.exports = {sprite, spriteAdvantages, spriteLang};
