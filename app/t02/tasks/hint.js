var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var One = gulpLoadPlugins({pattern: ['gulp-*']}); //# 插件载入

gulp.task('jshint',function (c) {
    console.log('------------------------------\n\t#正在验证js文件风格\n------------------------------')
    gulp.src('src/scripts/**/*.js')
        .pipe( One.jshint({"undef": true,"unused": false}) ) //# 风格设置
        .pipe( One.jshint.reporter() ) //# 风格错误输出 ## 要能吧提示设置为中文就好了!!
        .pipe( One.jshint.reporter('default') );
    console.log('------------------------------\n\t#验证完毕\n------------------------------')
    c();
});
gulp.task('stylhint',function(c){
    console.log('------------------------------\n\t#正在验证css文件风格\n------------------------------')
    gulp.src(['src/css/*.css','src/less/**/*.less']) //## 验证less 格式。
        .pipe( One.csslint() )
        .pipe( One.csslint.formatter() )
    console.log('------------------------------\n\t#验证完毕\n------------------------------')
    c();
});

gulp.task('hint',gulp.series('jshint','stylhint',function (c) {
        console.log('正在验证代码风格')
        c();
    })
    //## 两部分进行同时验证
);

//## 验证 js 和 css 的风格。 ==> 不要在执行任务的时候进行验证。 ==> 后期打磨的时候会用到。