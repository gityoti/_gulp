var gulp = require('gulp')
,path = require('path')
,time = require('time-stamp')
,gulpLoadPlugins = require('gulp-load-plugins')
,One = gulpLoadPlugins({pattern: ['gulp-*']})
//,config = require('../src/config')
,_method = require('../method/method.js')
,pathConfig = require('../method/pathConfig.js')

gulp.task('zip',function(e){

    _method.setMsg('正在进行备份');
    gulp.src( pathConfig.path.zip.src )
        .pipe( One.zip( path.basename(__dirname)+'_'+time('YYMMDDHHmmss')+'.zip' ) )
        .pipe( gulp.dest( _method.mergeLink(pathConfig.path.root.history,pathConfig.path.zip.dist) ) );
    e();
    //## 根目錄路徑有問題。
    /*((
        //## 源码部分进行打包。 //##
    ))*/
});
