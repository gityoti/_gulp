var gulp = require('gulp')
var gulpLoadPlugins = require('gulp-load-plugins')
var One = gulpLoadPlugins({pattern: ['gulp-*','gulp-utf8-*']}) //# 插件载入
gulp.task('text',function(c){
    console.log('正在测试输出.txt文件');
    gulp.src('src/*.txt',{since: gulp.lastRun('text')})
        .pipe( One.concat('aaaa.txt') )
        .pipe( One.rename({suffix:'.min'}) )
        .pipe( gulp.dest('dist') )
    //.pipe( One.abc() );
    c();
})