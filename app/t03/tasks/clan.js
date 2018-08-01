var gulp = require('gulp')
,del = require('del')
,config = require('../src/config');

gulp.task('clean',function(c){
    console.log('------------------------------\n\t#正在删除生成的文件\n------------------------------')
    return del( config.root.dist );
    console.log('------------------------------\n\t#删除完毕\n------------------------------')
    c();
    /*((
        ## 删除生成文件 ## 在编译前删除掉之前生成的文件.
    ))*/
});
