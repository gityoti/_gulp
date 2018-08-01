var gulp = require('gulp')
var gulpLoadPlugins = require('gulp-load-plugins')
var One = gulpLoadPlugins({pattern: ['gulp-*','gulp-utf8-*']}) //# 插件载入
var path = 'src\\images\\*.png'; //##这个路径要怎么转义? 使用正则??
gulp.task('text',function(c){

    var regexp = /\\/gi;
    console.log(path = path.replace(regexp,'*'));

    console.log('正在测试输出.txt文件',path);
    // gulp.src('src/*.txt',{since: gulp.lastRun('text')})
    //     .pipe( One.concat('aaaa.txt') )
    //     .pipe( One.rename({suffix:'.min'}) )
    //     .pipe( gulp.dest('dist') )
    // //.pipe( One.abc() );
    //gulp.src('src\\images\\*.png')
        //.pipe( gulp.dest('abc') );


    c();
});