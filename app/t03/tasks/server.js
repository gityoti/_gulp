var gulp = require('gulp')
var bSync = require('browser-sync') //# 浏览器
var config = require('../src/config');
gulp.task('server',function(c){
    //## 配置浏览器
    bSync({
        server:{baseDir:[config.root.dist,'app']} //## 设置根目录,在根目录下寻找 index.html
        ,port: 3001 //## 设置端口
        ,files:['**']
        ,browser: ['chrome','firefox'][0] //# 他开指定浏览器
        ,https: false
        ,open:true //# 打开浏览器
    });
    c();
    /*((
        #1 server:{baseDir:['dist','app']} #设置目录
        #2 port #端口
        #3 files:['**'] #没设置无法自动刷新
        #4 browser: ['chrome', 'firefox'] #启动浏览器
        #5 https #启用https 加密
        #6 open #是否启动浏览器
    ))*/
});