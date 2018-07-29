var gulp = require('gulp')
var config = require('../src/config');

gulp.task('swf',function(c){
    //## 文件进行转移
    gulp.src( mergeLink(config.root.src,config.swf.src) )
        .pipe( gulp.dest(mergeLink(config.root.dist,config.swf.dist)) )
    c();
});

//# 这个是flash 文件吧
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