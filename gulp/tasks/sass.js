var gulp         = require('gulp');
var config       = require('./../config');
var sass         = require('gulp-sass');
var notify       = require('gulp-notify');

var sourcemaps   = require('gulp-sourcemaps');
var postcss      = require('gulp-postcss');
var mqpacker     = require('css-mqpacker');
var autoprefixer = require('autoprefixer');
var watch        = require('gulp-watch');

var sassPath = config.src.sass + '**/*.scss';
var vendorPath = config.src.sass + '/vendor/**/*.scss';

var processors = [
    autoprefixer({
        browsers: ['last 4 versions', 'Android >= 4.0'],
        cascade: true, //是否美化属性值 默认：true 像这样：
        //-webkit-transform: rotate(45deg);
        //        transform: rotate(45deg);
        remove:true //是否去掉不必要的前缀 默认：true
    }),
    // 媒体查询合并
    mqpacker({
        sort: function(a, b) {
            a = a.replace(/\D/g,'');
            b = b.replace(/\D/g,'');
            return b - a;
        }
    })
];

// 第三方全局通用sass编译
gulp.task('sass:vendor', function() {
  return gulp.src(config.src.sass + 'vendor/vendor.scss')
    .pipe(sass({
        sourcemap: true,
        style: 'compact',
        emitCompileError: true
    }))
    .on('error', notify.onError({
        title: 'Sass Error!',
        message: '<%= error.message %>'
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.dest.css + 'vendor'));
});

// 基础业务sass配置
gulp.task('sass:base', function() {
  return gulp.src([sassPath, '!' + vendorPath])
    .pipe(watch([sassPath, '!' + vendorPath]))
    .pipe(sass({
        sourcemap: true,
        precision: 10,
        style: 'compact',
        emitCompileError: true
    }))
    .on('error', notify.onError({
        title: 'Sass Error!',
        message: '<%= error.message %>'
    }))
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.dest.css));
});

gulp.task('sass', ['sass:vendor', 'sass:base']);

gulp.task('watch:sass', function() {
  gulp.watch([sassPath, '!' + vendorPath], ['sass:base']);
  gulp.watch(vendorPath, ['sass:vendor']);
});
