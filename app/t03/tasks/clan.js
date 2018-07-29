var gulp = require('gulp')
var del = require('del')
var config = require('../src/config');
gulp.task('clean',function(c){
    console.log('------------------------------\n\t#正在删除生成的文件\n------------------------------')
    return del( config.root.dist );
    console.log('------------------------------\n\t#删除完毕\n------------------------------')
    c();
    /*((
        ## 删除生成文件 ## 在编译前删除掉之前生成的文件.
    ))*/
});
function mergeLink(root,src){ //# 组合链接
    var links;
    if( typeof src =='object' ){
        links = [];
        for( i in src ){
            links[i]=root+src[i] //# 返回一个新组合的数组
        }
    }else{
        links = '';
        links = root+src; //# 返回一个字符
    }
    return links;
}