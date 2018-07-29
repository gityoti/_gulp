var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var One = gulpLoadPlugins({pattern: ['gulp-*']}); //# 插件载入
var gulpImports = require('gulp-imports'); //# js 文件导入
var config = require('../src/config'); //# 引用配置

//## 监听 和 编译 文件不一样!!
gulp.task('scripts',function O_script(c){
    console.log('------------------------------\n\t#正在处理JS相关文件\n------------------------------')
    //,{since:gulp.lastRun( 'scripts' )} //# 删除这个看看能不能重新编译?
    gulp.src( mergeLink(config.root.src,config.scripts.src) )
        .pipe( One.sourcemaps.init() )
        .pipe( One.imports() ) //# 导入js 的依赖文件
        //.pipe( One.cached( 'scripts' ) ) //# 缓存
        .pipe( One.uglify({compress: false, mangle:{toplevel:true, reserved: ['$',"Jquery"]}}) ) //# js 压缩
        //.pipe( One.remember() ) //# 还原
        .pipe( One.sourcemaps.write('./map',{sourceRoot:'js-source'}) )
        .pipe( gulp.dest( mergeLink(config.root.dist,config.scripts.dist) ) );
    c();
    console.log('------------------------------\n\t#JS处理完成\n------------------------------')
    /*((
        #1 风格语法错误 =>  压缩 => 合并
         #2 修改监听 =>  更新执行
        #3 删除监听 =>  缓存内指定删除
        ## 只生成一个独立文件

        ## 路径上调整为手动!
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