var gulp = require('gulp')
var config = require('../src/config');
gulp.task('fonts',function(c){
    console.log('------------------------------\n\t#正在处理字体相关\n------------------------------')
    gulp.src( mergeLink(config.root.src,config.fonts.src) ) // mergeLink(config.root.src,config.swf.src)
        .pipe( gulp.dest( mergeLink(config.root.dist,config.fonts.dist) ) );
    c();
    console.log('------------------------------\n\t#字体处理完毕\n------------------------------')
    /*((
        #1 转移文件 ## 修改的可能性不高 ## 添加文件+ 字体增加(修改)
        #2 监听依赖文件 + 和自定义文件 ==> 文件进行转移
        #3 删除 => 根据文件名进行删除.
    ))*/
});
//## 依赖的字体文件进行转移!
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