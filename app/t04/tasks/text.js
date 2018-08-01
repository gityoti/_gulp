var gulp = require('gulp')
,gulpLoadPlugins = require('gulp-load-plugins')
,One = gulpLoadPlugins({pattern: ['gulp-*']})
,_method = require('../method/method.js')
    //# 使用命令行进行传参
,gulpif = require('gulp-if')
,uglify = require('gulp-uglify')
,minimist = require('minimist')
,path = require('path');
var knownOptions = {
    string: 'env',
    default: { env: process.env.NODE_ENV || 'production' }
    //process 处理加工
};
var options = minimist(process.argv.slice(2), knownOptions);

gulp.task('text',function(c){

    //_method.setMsg('输出测试!!!'+options.env+'/'+process.env.NODE_ENV+'/'+process.argv);
    // return gulp.src('**/*.js')
    //     .pipe(gulpif(options.env === 'production', uglify())) // 仅在生产环境时候进行压缩
    //     .pipe(gulp.dest('dist'));

    // gulp.src('./').on('data',function (file) {
    //    console.log(path.basename(file.history[0])) //# 查看匹配到的链接 ## 取得项目所在的目录 ## 得到根目录
    // }); //gulp text --env a42  + 命令行传参

    //console.log( _method.rootDir(),'返回根目录');

    //console.log('根目录是:'+_method.rootDir());
    c();
});






