const del = require('del');

function clean(cb) {
  return del('build').then(() => {
    cb()
  })
}

module.exports = clean;
