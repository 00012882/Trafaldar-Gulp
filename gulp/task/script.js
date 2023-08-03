const pathSource = require('../pathSource');
const {src, dest} = require('gulp');
const plumber = require('gulp-plumber');
const webpack = require('webpack-stream');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");

function script(cb) {
  src(pathSource.src.script)
    .pipe(plumber())
    .pipe(webpack({
      mode: 'production',
      output: {
        publicPath: './js/',
        filename: '[name].min.js',
      },
      optimization: {
        usedExports: true,
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                "presets" : [
                  ["@babel/preset-env", {"modules": false}]
                ]
              }
            }
          }
        ]
      },
      plugins: [
        new CircularDependencyPlugin(),
        new DuplicatePackageCheckerPlugin()
      ],
      performance : {
        hints : false
      }
    }))
    .pipe(dest(pathSource.build.script));

  return cb()
}

module.exports = {script};

/*
presets: [
  ['@babel/preset-env', {
    "modules": false,
    "useBuiltIns": "entry",
    "corejs": "2.6.12",
    "targets": {
      // "esmodules": true,
      "browsers": [
        '> 1%',
        'last 2 versions',
        'Firefox ESR',
      ],
    },
  }],
],*/
