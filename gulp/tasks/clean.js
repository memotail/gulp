var gulp = require('gulp');
var config = require('../config');

var clean = require('gulp-clean');

gulp.task('clean', function() {
  return gulp.src([
    config.dest.root
  ]).pipe(clean())
})
