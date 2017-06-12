var gulp    = require('gulp');
var notify  = require('gulp-notify');
var include = require('gulp-include');
var watch   = require('gulp-watch');
var config  = require('../config');

var htmlPath = config.src.html + '**/*.html';
var assetsPath = config.src.assets + '**/*.*';
var partialsPath = config.src.html + '_partials/**/*.html';

gulp.task('html', function() {
  gulp.src([htmlPath, '!' + partialsPath, '!' + assetsPath])
    .pipe(watch([htmlPath, '!' + partialsPath, '!' + assetsPath]))
    .pipe(include())
    .on('error', notify.onError({
        title: 'Html Error!',
        message: '<%= error.message %>'
    }))
    .pipe(gulp.dest(config.dest.html));
});

gulp.task('watch:html', function() {
  gulp.watch([
    config.src.html+'**/*.html',
    '!' + assetsPath
  ], ['html']);
});
