var path        = require('path');
var fs          = require('fs');
var gulp        = require('gulp');
var notify      = require('gulp-notify');
var spritesmith = require('gulp.spritesmith');
var config      = require('../../config');

// 读取目录，存在目录则调用
function readdir (dir, done) {
  fs.readdir(dir, function (err, files) {
    if (err) {
      return console.log('read dir error');
    }

    files.forEach(function(file) {
      var filepath = path.resolve(dir, file);
      fs.stat(filepath, function (err, stat) {
        if (stat && stat.isDirectory()) {
          done(file, filepath);
        }
      });
    });
  })
}

gulp.task('sprite', function() {

  readdir(config.src.sprite, function(file, filepath) {
    console.log('===> build sprite, path:%s', filepath);

    var spriteData = gulp.src(filepath + '/*.png')
      .pipe(spritesmith({
        imgName: file + '.png',
        cssName: file + '.css',
        cssFormat: 'css',
        padding: 4,
        // cssTemplate: path.resolve(__dirname, './sprite.css')
      }));

    spriteData
      .pipe(gulp.dest(config.dest.sprite))
      .pipe(notify("New sprite created!"));
  });

});

gulp.task('watch:sprite', function() {
    gulp.watch(config.src.img + '/sprite-*/*.png', ['sprite']);
});
