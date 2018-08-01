var gulp = require('gulp')
,del = require('del')
//,config = require('../src/config')
,_method = require('../method/method.js')
,pathConfig = require('../method/pathConfig.js')

gulp.task('clean',function(c){
    _method.setMsg('正在删除生成的文件');
    return del( pathConfig.path.root.dist );
    c();
    /*((
        ## 删除生成文件 ## 在编译前删除掉之前生成的文件.
    ))*/
});
