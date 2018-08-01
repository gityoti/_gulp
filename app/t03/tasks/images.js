var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var One = gulpLoadPlugins({pattern: ['gulp-*']}); //# 插件载入
var config = require('../src/config');

gulp.task('images',function(c){
    console.log('------------------------------\n\t#正在处理图片相关\n------------------------------');
    gulp.src( mergeLink(config.root.src,config.images.src) ,{since:gulp.lastRun('images')})
        .pipe( One.imagemin() ) //## 图片压缩imageMin()
        .pipe( gulp.dest( mergeLink(config.root.dist,config.images.dist) ) );
    c();
    console.log('------------------------------\n\t#图片处理完成\n------------------------------');
    /*((
        ## 压缩 + 转移 ## 有必要进行缓存吗?? 没必要
        ## 修改监听 =>
        ## 删除监听 => 根据文件名进行删除生成文件

        ## 生成多个文件
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