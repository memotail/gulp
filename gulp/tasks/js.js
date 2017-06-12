var gulp    = require('gulp');
var include = require('gulp-include');
var watch   = require('gulp-watch');
var notify  = require('gulp-notify');
var uglify  = require('gulp-uglify');
var config  = require('../config');

var jsPath = config.src.js + '**/*.js';
var vendorPath = config.src.js + '/vendor/**/*.js';

// 第三方全局通用js编译
gulp.task('js:vendor', function () {
  return gulp.src(config.src.js + 'vendor/vendor.js')
    .pipe(include())
    .on('error', notify.onError({
        title: 'Html Error!',
        message: '<%= error.message %>'
    }))
    .pipe(uglify())
    .pipe(gulp.dest(config.dest.js + 'vendor'));
});

// 基础业务js配置
gulp.task('js:base', function () {
  return gulp.src([jsPath, '!' + vendorPath])
    .pipe(watch([jsPath, '!' + vendorPath]))
    .pipe(include())
    .on('error', notify.onError({
        title: 'Html Error!',
        message: '<%= error.message %>'
    }))
    //.pipe(uglify())
    .pipe(gulp.dest(config.dest.js));
});

gulp.task('js', ['js:vendor', 'js:base']);

gulp.task('watch:js', function() {
  gulp.watch([jsPath, '!' + vendorPath], ['js:base']);
  gulp.watch(vendorPath, ['js:vendor']);
});
