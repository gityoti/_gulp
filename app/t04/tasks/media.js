var gulp = require('gulp')
//,config = require('../src/config')
,_method = require('../method/method.js')
,pathConfig = require('../method/pathConfig.js')

gulp.task('media',function(c){

    _method.setMsg('正在转移媒体相关文件');
    gulp.src( _method.mergeLink(pathConfig.path.root.src,pathConfig.path.media.src) )
        .pipe( gulp.dest( _method.mergeLink(pathConfig.path.root.dist,pathConfig.path.media.dist) ) );
    c();

    //## 使用到的媒体文件进行转移!
});
