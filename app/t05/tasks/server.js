var gulp = require('gulp')
,bSync = require('browser-sync')
//,config = require('../src/config')
,_method = require('../method/method.js')
,plugConfig = require('../method/plugConfig.js')
,pathConfig = require('../method/pathConfig.js')


gulp.task('server',function(c){
    _method.setMsg('正在启动浏览器');
    console.log(pathConfig.path.root.dist) //#  config 替換成  pathConfig.path
    bSync( plugConfig.browserSync( pathConfig.path.root.dist ) );
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