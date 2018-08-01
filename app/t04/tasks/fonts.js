var gulp = require('gulp')
//,config = require('../src/config')
,_method = require('../method/method.js')
,pathConfig = require('../method/pathConfig.js')

gulp.task('fonts',function(c){

    _method.setMsg('正在处理字体相关');
    gulp.src( _method.mergeLink(pathConfig.path.root.src,pathConfig.path.fonts.src) )
        .pipe( gulp.dest( _method.mergeLink(pathConfig.path.root.dist,pathConfig.path.fonts.dist) ) );
    c();

});
