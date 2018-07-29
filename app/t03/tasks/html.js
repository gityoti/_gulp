var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var One = gulpLoadPlugins({pattern: ['gulp-*']}); //# 插件载入
//var glob_html = ['src/index.ejs']
var laz = require('lazypipe');//# 延迟
var p_01 = laz().pipe( One.plumber,{errorHandler:function(e){One.util.beep(),One.util.log(e.nanegul)}} ); //# 编译报错处理
var config = require('../src/config');
console.log(config); //# 配置文件

gulp.task('html',function(c){
    console.log('------------------------------\n\t#正在处理HTML相关\n------------------------------');

    gulp.src( mergeLink(config.root.src,config.html.src) )
        .pipe( One.ejs( require('../src/data/data.json'),{},{ext: '.html'} ) )
        .pipe( p_01() ) //# 编译错误忽略!
        .pipe( One.htmlmin({collapseWhitespace:true}) ) //# 压缩html 文件。 有效
        .pipe( gulp.dest( mergeLink(config.root.dist,config.html.dist) ) );
    c();
    console.log('------------------------------\n\t#HTML处理完成\n------------------------------');
    /*((
        #1 ejs 语法报错(很重要)+编译+优化 ==>输出一个独立文件. //# 不建议输出多个文件。
        #2 修改监听 ejs 主模块+ejs子模块 监听 ==> ( 不需要缓存==> 独立文件编译。 )
        #3 删除监听 ## 没有缓存的关系, ejs 编译的时候会不会出错???
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