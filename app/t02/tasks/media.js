var gulp = require('gulp');
var config = require('../src/config');
gulp.task('media',function(c){
    console.log('------------------------------\n\t#正在转移媒体相关文件\n------------------------------')
    gulp.src( mergeLink(config.root.src,config.media.src) ) // mergeLink(config.root.src,config.media.src)
        .pipe( gulp.dest( mergeLink(config.root.dist,config.media.dist) ) )
    c();
    console.log('------------------------------\n\t#转移完毕\n------------------------------')

    //## 使用到的媒体文件进行转移!
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