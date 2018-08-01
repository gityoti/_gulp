var gulp = require('gulp')
,gulpLoadPlugins = require('gulp-load-plugins')
,One = gulpLoadPlugins({pattern: ['gulp-*']})
//,config = require('../src/config')
,_method = require('../method/method.js')
,plugConfig = require('../method/plugConfig.js')
,pathConfig = require('../method/pathConfig.js')

gulp.task('merge',function(c){
    _method.setMsg('正在打包html所需要的资源');
    gulp.src(_method.mergeLink(pathConfig.path.root.dist,pathConfig.path.merge.src))
        .pipe( One.inlineSource( plugConfig.inlineSource ) )
        .pipe( gulp.dest( _method.mergeLink(pathConfig.path.root.dist,pathConfig.path.merge.dist) ) );
    return c();

});
