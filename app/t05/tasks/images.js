var gulp = require('gulp')
,gulpLoadPlugins = require('gulp-load-plugins')
,One = gulpLoadPlugins({pattern: ['gulp-*']})
//,config = require('../src/config')
,_method = require('../method/method.js')
,plugConfig = require('../method/plugConfig.js')
,pathConfig = require('../method/pathConfig.js')

gulp.task('images',function(c){
    _method.setMsg('正在处理图片相关');
    gulp.src( _method.mergeLink(pathConfig.path.root.src,pathConfig.path.images.src) ,{since:gulp.lastRun('images')})
        .pipe( One.imagemin( plugConfig.imagemin ) )
        .pipe( gulp.dest( _method.mergeLink(pathConfig.path.root.dist,pathConfig.path.images.dist) ) );
    c();

});
