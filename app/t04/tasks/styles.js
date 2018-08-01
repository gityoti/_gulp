var gulp = require('gulp')
,gulpLoadPlugins = require('gulp-load-plugins')
,One = gulpLoadPlugins({pattern: ['gulp-*']})
,laz = require('lazypipe')
,plugConfig = require('../method/plugConfig.js')
//,config = require('../src/config')
,_method = require('../method/method.js')
,p_01 = laz().pipe( One.plumber,{errorHandler:function(e){One.util.beep();One.util.log(e.nanegul)}} )
,pathConfig = require('../method/pathConfig.js')

gulp.task('styles',function(c){
    _method.setMsg('正在处理STYLE样式相关');
    gulp.src( _method.mergeLink(pathConfig.path.root.src,pathConfig.path.style.src) )
        .pipe( p_01() )
        .pipe( One.less( plugConfig.less ) )
        .pipe( One.autoprefixer( plugConfig.autoprefixer ) )
        .pipe( One.cleanCss( plugConfig.cleanCss ) )
        .pipe( gulp.dest( _method.mergeLink(pathConfig.path.root.dist,pathConfig.path.style.dist) ) );
    c();
});
