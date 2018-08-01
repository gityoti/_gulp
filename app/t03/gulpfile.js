var gulp = require('gulp')
,gulpLoadPlugins = require('gulp-load-plugins')
,One = gulpLoadPlugins({pattern: ['gulp-*']}) //# 插件载入
,path = require('path')
//# 引入外部定义的模块
,requireDir = require('require-dir')
,dir = requireDir('./tasks')
//# 浏览器 ## 刷新依赖
,bSync = require('browser-sync')
//# 缓存管理 ==>
,slash = require('slash') //# 键值读取不到缓存。 ## 删除缓存。
,config = require('./src/config') //# 路径管理工具
//console.log(config);
//console.log( _method.mergeLink(config.root.src,config.html.listen) );
,_method = require('./method/method.js'); //# 自定义工具方法
gulp.task('default',
	/*((
		#1 删除生成的目录
		#2 并列执行任务
			#2_1 图片 #2_2 字体文件 #2_3 脚本 #2_4 样式 #2_5 html 
		#3 启动浏览器服务
		#4 启用监听
			#4_1 修改监听
			#4_2 删除监听
			#4_3 浏览器刷新+
	))*/
	gulp.series(
		'clean' //#1 清除生成的文件
		,'sp' //# 生成雪碧图
        ,'styles' //# 编译样式
		,'scripts' //# 编译脚本
		,gulp.parallel('images','fonts','html','media','swf') //#2 并列执行
		,'server'//#3 启动浏览器
		,function watcher(c){ //## 把这个写入server 也不错???!!!
			var watch_script,watch_styless,watch_html,watch_images,watch_dist,watch_sp,watch_media,watch_swf;
			//console.log(a,1111122222);

			//## 监听1
			watch_scripts = gulp.watch( _method.mergeLink(config.root.src,config.scripts.listen),gulp.parallel('scripts') );
			//# 监听库 + 主js文件 ( 只编译主文件 ) ##

			watch_styless = gulp.watch( _method.mergeLink(config.root.src,config.style.listen),gulp.parallel('styles') );
			//# 监听库 + less + less 主文件( 只编译主文件 ) ##ok

			watch_html = gulp.watch( _method.mergeLink(config.root.src,config.html.listen),gulp.parallel('html') );
			//# 监听模块文件 + 主文件 //# html 发生修改 ##ok

			watch_images = gulp.watch( _method.mergeLink(config.root.src,config.images.listen),gulp.parallel('images') );
			//# 监听图像目录! //# 图像文件发生修改 ## 复制的文件没有执行 ## 估计需要使用 on 来做处理

			watch_sp = gulp.watch( _method.mergeLink(config.root.src,config.sp.listen),gulp.parallel('sp') );
			//# 监听icon目录 ok

			watch_fonts = gulp.watch( _method.mergeLink(config.root.src,config.fonts.listen),gulp.parallel('fonts') );
			//# 监听字体文件 //# 发生添加字体

			watch_media = gulp.watch( _method.mergeLink(config.root.src,config.media.listen),gulp.parallel('media') );
			//# mp3 mp4 等音频文件

			watch_swf = gulp.watch( _method.mergeLink(config.root.src,config.swf.listen),gulp.parallel('swf') );
			//# swf 文件。
            // watch_test= gulp.watch( _method.mergeLink(config.root.src,config.images.listen),function (e) {
			// 	//console.log('触发事件:'+e.type+'|'+e.path)
			// 	console.log(e(),'test 被触发')
            // } );
            //# 测试

			watch_dist = gulp.watch( [config.root.src+'/**/*'] );
			//# 监听输出目录是否发生修改.//# 目录内文件发生修改. //# 自动刷新核心

			//## 监听On
            watch_sp.on('unlink',function(p){ //# 返回的是被删文件的相对路径
				console.log(p)
			}).on('change',function (p) {
				console.log(p)
            }); //# path.basename(p) 返回文件名。
            watch_images.on('unlink',function(e){
				//console.log('图片发生删除',e) //# ok
                _method.del(e,'./dist/images/')
			}).on('change',function(e){
                console.log('图片发生修改',e) //# 修改文件会走这里 ok
			}).on('add',function (e) {
                _method.add(e,'./dist/images/') //# 文件进行转移。
            }).on('error',function(e){
            	//console.log('发生错误',e)
			});

			watch_dist.on('change',bSync.reload);
			//## 浏览器核心刷新
			c();
		}
	)
);


//{since: gulp.lastRun('html')}
// add = function (file,target) {
//     console.log(file,target);
//     return gulp.src( file ).pipe( gulp.dest(target) );
//     //# 链接发生增加的时候触发这个函数 || 对文件进行转移
//     console.log('新添加的文件正在进行转移','成功触发!路径不对。')
// };