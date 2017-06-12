var gulp     = require('gulp');
var include  = require('gulp-include');
var notify   = require('gulp-notify');
var config   = require('../config');

var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var tinypng  = require('gulp-tinypng');

//压缩图片
gulp.task('image', function () {
  gulp.src(config.src.img +'**/*.{png,jpg,jpeg}')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest(config.dest.img));
});

//压缩图片 - tinypng
gulp.task('tinypng', function () {
  gulp.src(config.src.img +'**/*.{png,jpg,jpeg}')
    .pipe(tinypng(config.tinypngapi))
    .pipe(gulp.dest(config.dest.img));
});

gulp.task('watch:image', function() {
  gulp.watch(config.src.img + '**/*', ['image']);
});
