var gulp = require('gulp');
var config = require('../config');

var imgSvg = config.src.img+'svg/*.*';

var imgSprite = config.src.img + 'sprite/**/*.*';  // sprite图标

gulp.task('copy', function() {
  // 复制图片
  gulp.src([config.src.img, '!'+ imgSprite])
    .pipe(gulp.dest(config.dest.img));

  // // 复制字体图标
  // gulp.src(config.src.root + '/fonts')
  //   .pipe(gulp.dest(config.dest.root + 'fonts'));
});

gulp.task('watch:copy', function() {
  gulp.watch(config.src.img+'*', ['copy']);
  gulp.watch(config.src.root+'fonts/*', ['copy']);
});
