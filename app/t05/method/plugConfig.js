//# 插件的配置参数 # 比写入json 文件里面灵活。 ## 配置參數不是很多
exports.jshint = 123; //# js
exports.csslint = 123; //# css
exports.htmlmin = {collapseWhitespace:true}; //# html 压缩
exports.imagemin = {}; //# 图片压缩
exports.inlineSource = {}; //# 打包html 内的 css js ;
exports.uglify = {compress: false, mangle:{toplevel:true, reserved: ['$',"Jquery"]}}; //# js 代码压缩
exports.imports = {}; //# js 导入
//exports.sourcemaps = {}; //# 源代码

exports.spritesmith = { imgName:'./images/sp.png',cssName:'./styles/sp.css',padding:5}; //# 雪碧图插件
exports.less = {}; //# less
exports.cleanCss = {debug: false}; //# css 压缩
exports.autoprefixer = {browsers: ['last 10 versions'],cascade: false}; //# css 前缀
//
exports.browserSync = function ( dir ) {
    return {server:{baseDir:[ dir,'app']},port:9331,files:['**'],browser: ['chrome','firefox'][0],https: false,open:true};
}; //# 浏览器配置



//# 浏览器插件 # 调整为函数调用!~根目录要设置好。