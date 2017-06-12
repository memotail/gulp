var path = require('path');
var gulp = require('gulp');
var notify = require('gulp-notify');
var iconfont = require("gulp-iconfont");
var consolidate = require("gulp-consolidate");
var config = require('../../config');

var fontname = 'icon';

gulp.task('iconfont', function(){
  gulp.src(config.src.fonts + '*.svg')
    .pipe(iconfont({
      fontName: fontname,
      prependUnicode: true,
      formats: ['ttf', 'eot', 'woff', 'woff2'],
      normalize: true,
      fontHeight: 1001,
      fontStyle: 'normal',
      fontWeight: 'normal'
    }))
    .on('glyphs', function(glyphs, options) {
        console.log(glyphs);

        gulp.src(path.resolve(__dirname, './iconfont.css'))
          .pipe(consolidate('lodash', {
              glyphs: glyphs,
              fontName: fontname,
              fontPath: './',
              className: 'icon'
          }))
          .pipe(gulp.dest(config.dest.fonts));

        gulp.src(path.resolve(__dirname, './iconfont.html'))
          .pipe(consolidate('lodash', {
              glyphs: glyphs,
              fontName: fontname,
              fontPath: './',
              className: 'icon',
              htmlBefore: '<i class="icon ',
              htmlAfter: '"></i>',
              htmlBr: ''
          }))
          .pipe(gulp.dest(config.dest.fonts));
    })
    .pipe(gulp.dest(config.dest.fonts))
    .pipe(notify("Icon font updated!"));
});
