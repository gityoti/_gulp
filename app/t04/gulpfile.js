var gulp = require('gulp')
,gulpLoadPlugins = require('gulp-load-plugins')
,One = gulpLoadPlugins({pattern: ['gulp-*']})
,path = require('path')
,requireDir = require('require-dir')
,dir = requireDir('./tasks')
,bSync = require('browser-sync')
//,config = require('./src/config')
,_method = require('./method/method.js')
,pathConfig = require('./method/pathConfig.js')
,log  = console.log

gulp.task('default',
	gulp.series(
		'clean'
		,'sp'
        ,'styles'
		,'scripts'
		,gulp.parallel('images','fonts','html','media','swf')
		,'server'
		,function watcher(c){

			var watch_scripts,watch_styles,watch_html,watch_images,watch_dist,watch_sp,watch_fonts,watch_media,watch_swf,
			link_scripts,link_styles,link_html,link_images,link_sp,link_fonts,link_media,link_swf,link_dist,
			file_images,file_fonts,file_media,file_swf;

			//## 监听1
            link_scripts = _method.mergeLink(pathConfig.path.root.src,pathConfig.path.scripts.listen);
            link_styles = _method.mergeLink(pathConfig.path.root.src,pathConfig.path.style.listen);
            link_html = _method.mergeLink(pathConfig.path.root.src,pathConfig.path.html.listen);
            link_images = _method.mergeLink(pathConfig.path.root.src,pathConfig.path.images.listen);
            link_sp = _method.mergeLink(pathConfig.path.root.src,pathConfig.path.sp.listen);
            link_fonts = _method.mergeLink(pathConfig.path.root.src,pathConfig.path.fonts.listen);
            link_media = _method.mergeLink(pathConfig.path.root.src,pathConfig.path.media.listen);
            link_swf = _method.mergeLink(pathConfig.path.root.src,pathConfig.path.swf.listen);
            link_dist = [pathConfig.path.root.src+'/**/*'];
            file_images = _method.mergeLink(pathConfig.path.root.dist,pathConfig.path.images.dist);
            file_fonts =_method.mergeLink(pathConfig.path.root.dist,pathConfig.path.fonts.dist);
            file_media =_method.mergeLink(pathConfig.path.root.dist,pathConfig.path.media.dist);
            file_swf =_method.mergeLink(pathConfig.path.root.dist,pathConfig.path.swf.dist);



			watch_scripts = gulp.watch( link_scripts,gulp.parallel('scripts') );
			//# javascrits
			watch_styles = gulp.watch( link_styles,gulp.parallel('styles') );
			//# style
			watch_html = gulp.watch( link_html,gulp.parallel('html') );
			//# html
			watch_images = gulp.watch( link_images,gulp.parallel('images') );
			//# 监听图像目录! //# 图像文件发生修改 ## 复制的文件没有执行 ## 估计需要使用 on 来做处理
			watch_sp = gulp.watch( link_sp,gulp.parallel('sp') );
			//# 监听icon目录 ok
			watch_fonts = gulp.watch( link_fonts,gulp.parallel('fonts') );
			//# 监听字体文件 //# 发生添加字体
			watch_media = gulp.watch( link_media,gulp.parallel('media') );
			//# mp3 mp4 等音频文件
			watch_swf = gulp.watch( link_swf ,gulp.parallel('swf') );
			//# 播放器文件
			watch_dist = gulp.watch( link_dist );
			//# 监听输出目录是否发生修改.//# 目录内文件发生修改. //# 自动刷新核心

			//## 监听On
            // watch_sp.on('unlink',function(p){ //# 返回的是被删文件的相对路径#
			// 	console.log(p)
			// }).on('change',function (p) {
			// 	console.log(p)
            // });
			//
           // log(file_images,file_fonts,file_media,file_swf,'檢驗最終生成的目錄是狗正確',link_media)

            _method.setFile(watch_images,file_images);
            _method.setFile(watch_fonts,file_fonts);
            _method.setFile(watch_media,file_media); //# 無效。
            _method.setFile(watch_swf,file_swf);
            //# 傳入對象 + 文件所在目錄
			//# 整理為一個方法!! 圖片ok ||字體ok ||媒體ok || 播放器文件ok|| ==> 增加刪除
			//# 雪碧圖發生修改沒有生效

            // watch_images.on('unlink',function(e){
             //    _method.setMsg('链接:'+e+'/n描述:图片发生删除');
             //    _method.del(e,'./dist/images/')
			// }).on('change',function(e){
             //    _method.setMsg('链接:'+e+'/n描述:图片发生修改');
			// }).on('add',function (e) {
             //    _method.add(e,'./dist/images/');
             //    _method.setMsg('链接:'+e+'/n描述:图片发生添加');
            // }).on('error',function(e){
            //
			// });



			watch_dist.on('change',bSync.reload);

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