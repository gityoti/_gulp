var gulp = require('gulp')
//,config = require('../src/config')
,_method = require('../method/method.js')
,pathConfig = require('../method/pathConfig.js')

gulp.task('swf',function(c){
    //## 文件进行转移
    _method.setMsg('正在转移播放器文件');
    gulp.src( _method.mergeLink(pathConfig.path.root.src,pathConfig.path.swf.src) )
        .pipe( gulp.dest( _method.mergeLink(pathConfig.path.root.dist,pathConfig.path.swf.dist) ) );
    c();
});

//# 这个是flash 文件吧 # 播放器文件.
