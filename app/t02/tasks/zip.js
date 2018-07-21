var gulp = require('gulp')
var path = require('path')
var time = require('time-stamp')
var gulpLoadPlugins = require('gulp-load-plugins')
var One = gulpLoadPlugins({pattern: ['gulp-*','gulp-utf8-*']}) //# 插件载入
var config = require('../src/config');
gulp.task('zip',function(e){
    console.log('------------------------------\n\t#正在进行备份\n------------------------------')
    gulp.src( config.zip.src )
        .pipe( One.zip( path.basename(__dirname)+'_'+time('YYMMDDHHmmss')+'.zip' ) )
        .pipe( gulp.dest( mergeLink(config.root.history,config.zip.dist) ) )
    e();
    console.log('------------------------------\n\t#备份已完成\n------------------------------')
    /*((
        //## 源码部分进行打包。 //##
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