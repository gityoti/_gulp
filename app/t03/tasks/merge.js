var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var One = gulpLoadPlugins({pattern: ['gulp-*']}); //# 插件载入
var path = require('path');
var config = require('../src/config');


gulp.task('merge',function(c){
    gulp.src(mergeLink(config.root.dist,config.merge.src))
        .pipe( One.inlineSource() ) //# 将资源全部合并到 index.html 文件减少请求
        .pipe( gulp.dest( mergeLink(config.root.dist,config.merge.dist) ) );
    return c();
    //## 在有需求的时候可以把文件 打包成一个html 文件.
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