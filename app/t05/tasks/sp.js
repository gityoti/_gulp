var gulp = require('gulp')
,sp = require('gulp.spritesmith')
//,pathConfig.path = require('../src/pathConfig.path')
,_method = require('../method/method.js')
,plugConfig = require('../method/plugConfig.js')
,pathConfig = require('../method/pathConfig.js')

gulp.task('sp',function(c){//# 雪碧图

    _method.setMsg('正在处理雪碧图');
    gulp.src( _method.mergeLink(pathConfig.path.root.src,pathConfig.path.sp.src) ) //One.spritesmith
        .pipe( sp( plugConfig.spritesmith ) )
        .pipe( gulp.dest( pathConfig.path.root.dist ) );
    c();

});

//## 处理雪碧图!

// # src/images/icon/ 监听路径
// # 如何让雪碧图进行合并? ==> 使用引入css文件? //@import "sub.css"; // @import url(css文件名.css);
