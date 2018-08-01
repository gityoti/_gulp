var gulp = require('gulp')
,gulpLoadPlugins = require('gulp-load-plugins')
,One = gulpLoadPlugins({pattern: ['gulp-*']})
,laz = require('lazypipe')
,p_01 = laz().pipe( One.plumber,{errorHandler:function(e){One.util.beep();One.util.log(e.nanegul)}} )
//,config = require('../src/config')
,_method = require('../method/method.js')
,fs = require('fs')
,path = require('path')
,plugConfig = require('../method/plugConfig.js')
,pathConfig = require('../method/pathConfig.js')

//console.log(config); //# 配置文件

gulp.task('html',function(c){
    _method.setMsg('正在处理HTML相关文件');
    //## 怎么获得文件所在目录
    // gulp.src('./').on('data',function (file) {
    //     console.log(path.basename(file.history[0])) //# 查看匹配到的链接 ## 取得项目所在的目录 ## 得到根目录
    // });

    var ejsLinks = _method.mergeLink(pathConfig.path.root.src,pathConfig.path.html.src); // 获取匹配到的ejs文件
    var ejsTarget = _method.mergeLink(pathConfig.path.root.dist,pathConfig.path.html.dist); // 输出路径

    for(var i=0;i<ejsLinks.length;i++){
        (function (key,index) { //## 匹配data 目录下是否有匹配的json 文件。
            fs.stat('./src/data/'+path.basename(key)+'.json', function (err, stats) {

                var _addr = '../src/data/'+path.basename(key)+'.json'; //## 路径是正确的
                var _date =  err===null?require( _addr ):{title:"还未绑定对于的json文件,输出默认值"};
                //# 判断对应的json数据是否存在。
                gulp.src( key )
                    .pipe( One.ejs( _date,{},{ext: '.html'} ).on('error',console.log) ) //# on 不会停止编译!
                    .pipe( p_01() )
                    .pipe( One.htmlmin( plugConfig.htmlmin ) )
                    .pipe( gulp.dest( ejsTarget ));

            })
        })( ejsLinks[i],i);
    }

    //# 路径不够动态!!~

    c();
});
