const pathSource = {
  src: {
    html: "app/html/*.html",
    uzHtml: "app/html/uz/*.html",
    enHtml: "app/html/en/*.html",
    json: "app/json/**/*.*",
    font: "app/fonts/**/*.*",
    sprite: ["app/img/svg/icon-*.svg", "app/img/svg/pattern-*.svg"],
    spriteAdvantages: "app/img/svg/services-*.svg",
    spriteLang: "app/img/svg/lang-*.svg",
    images: "app/img/**/*.*",
    script: "app/js/main.js",
    styles: "app/scss/*.scss",
    vendors: "app/vendors/**/*.*",
    favicon: "app/favicon/**/*.*"
  },
  watch: {
    html: "app/html/**/*.html",
    uzHtml: "app/html/uz/**/*.html",
    enHtml: "app/html/en/**/*.html",
    json: "app/json/**/*.*",
    font: "app/fonts/**/*.*",
    sprite: ["app/img/svg/icon-*.svg", "app/img/svg/pattern-*.svg"],
    spriteAdvantages: "app/img/svg/services-*.svg",
    spriteLang: "app/img/svg/lang-*.svg",
    images: "app/img/**/*.*",
    script: "app/js/**/*.js",
    styles: "app/scss/**/*.scss",
    vendors: "app/vendors/**/*.*",
    favicon: "app/favicon/**/*.*"
  },
  build: {
    html: "dist",
    uzHtml: "dist/uz",
    enHtml: "dist/en",
    json: "dist/json",
    font: "dist/fonts",
    sprite: "app/html/includes",
    spriteAdvantages: "app/html/includes",
    spriteLang: "app/html/includes",
    images: "dist/img",
    script: "dist/js",
    styles: "dist/css",
    vendors: "dist/vendors",
    favicon: "dist"
  }
};

module.exports = pathSource;
