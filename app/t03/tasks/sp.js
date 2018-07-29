var gulp = require('gulp');
var sp = require('gulp.spritesmith'); //# 雪碧图
var config = require('../src/config');
gulp.task('sp',function(c){//# 雪碧图
    console.log('------------------------------\n\t#正在处理雪碧图\n------------------------------')
    gulp.src( mergeLink(config.root.src,config.sp.src) ) //One.spritesmith
        .pipe( sp( { imgName:'./images/sp.png',cssName:'./styles/sp.css',padding:5} ) )
        .pipe( gulp.dest( config.root.dist ) )
    c();
    console.log('------------------------------\n\t#雪碧图处理完毕\n------------------------------')
});

//## 处理雪碧图!

// # src/images/icon/ 监听路径
// # 如何让雪碧图进行合并? ==> 使用引入css文件? //@import "sub.css"; // @import url(css文件名.css);
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