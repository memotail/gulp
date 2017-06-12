var gulp = require('gulp');
var runSequence = require('gulp-sequence');

require('require-dir')('./gulp/tasks', { recurse: true });

gulp.task('watch', [
  'watch:html',
  'watch:sass',
  'watch:js',
  'watch:image'
]);

// 启动开发服务监控(首次拉去代码，需要 `gulp build` 编译全部 )
gulp.task('default', ['server', 'watch'], function() {});

//编译全部
gulp.task('build', function(cb) {
  // 先执行清除，再编译
  runSequence('clean', ['html', 'copy', 'sprite', 'iconfont', 'image', 'js', 'sass'])(cb);
});
