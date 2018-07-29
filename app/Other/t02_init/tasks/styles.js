var gulp = require('gulp')
var gulpLoadPlugins = require('gulp-load-plugins')
var One = gulpLoadPlugins({pattern: ['gulp-*']}) //# 插件载入
//var bowerFiles = require('main-bower-files') //# 加载插件
var laz = require('lazypipe')//# 延迟
var p_01 = laz().pipe( One.plumber,{errorHandler:function(e){One.util.beep(),One.util.log(e.nanegul)}} ) //# 编译报错处理
var p_02 = laz()
    .pipe( One.autoprefixer,{browsers: ['last 10 versions'],cascade: false} )//#css前缀
    .pipe( One.cleanCss,{debug: false},function(e){ false&&console.log(e)} )//# css压缩
var config = require('../src/config');

//## 放弃bower 的使用 ## 使用less 导入! ==> gulp 的监听就出现矛盾
gulp.task('styles',function(c){
    console.log('------------------------------\n\t#正在处理STYLE样式相关\n------------------------------')
    gulp.src( mergeLink(config.root.src,config.style.src) )
        .pipe( p_01() ) //# 无法编译进行报错 ## 报错为什么没有说明在第几行??
        .pipe( One.less() ) //# 进行编译
        .pipe( p_02() ) //# css 优化
        .pipe( gulp.dest( mergeLink(config.root.dist,config.style.dist) ) )
    c();
    console.log('------------------------------\n\t#STYLE处理完成\n------------------------------')
    /*((
        ## less 没必要编译多个吧!! 只编译唯一一个. ==> !!! 怎么解决上下文顺序关系呢?
        ## 样式需要缓存??? ## 缓存的是less ???  css 需要进行合并
        #1 less 语法验证 ==> 编译 => 前缀 => 压缩 =>合并
        #2 修改监听 less 主模块 + 子模块 + 依赖css ==> less 内引入比较合理!!( 不会把冗余的模块的less 也加载进来,同时保证上下文关系 )
        #3 删除监听

        ## 只生成一个独立文件
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