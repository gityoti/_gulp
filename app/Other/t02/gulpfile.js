var gulp = require('gulp')
,path = require('path')
,time = require('time-stamp')
,del = require('del')
,slash = require('slash')
,gulpLoadPlugins = require('gulp-load-plugins')
,One = gulpLoadPlugins({pattern: ['gulp-*','gulp-utf8-*']}) //# 插件载入
,sp = require('gulp.spritesmith') //# 雪碧图

,laz = require('lazypipe')//# 延迟
,bSync = require('browser-sync') //# 浏览器
,bowerFiles = require('main-bower-files') //# 加载插件

,p_01 = laz().pipe( One.plumber,{errorHandler:function(e){One.util.beep(),One.util.log(e.nanegul)}} ) //# 编译报错处理
,p_02 = laz()
	.pipe( One.autoprefixer,{browsers: ['last 10 versions'],cascade: false} )//#css前缀
	.pipe( One.cleanCss,{debug: false},function(e){ false&&console.log(e)} )//# css压缩
	
,p_03 = laz().pipe( One.csslint,{'shorthand': false} ).pipe( One.csslint.formatter )//# css 风格验证
,p_05 = laz()
	.pipe( One.uglify,{compress: false,mangle:{toplevel:true,reserved: ['$',"Jquery"]}} )//##js 压缩。
,p_06 = laz()
	.pipe( One.jshint,{"unused":0,"undef":0,"white":0,"nomen":0,"bitwise":0,"onevar":0} )
	.pipe( One.jshint.reporter,'default' )//# JS风格验证
	
	//## bower 依赖文件预处理
,glob_scripts = bowerFiles( '**/*.js' ).concat( 'src/scripts/*.js' )
,glob_styles = bowerFiles( '**/*.css' ).concat( ['src/css/*.css','src/less/*.less','src/_less/*.less'] )  //## 需要控制排序问题
,glob_images = ['src/images/*.{jpg,png,gif,svg}','!src/images/sp_*.{jpg,png}']
,glob_fonts = bowerFiles( '**/*.{eot,ttf,svg,woff}' ).concat(['src/fonts/*.{eot,ttf,svg,woff}']) //## 需要加载的字体路径
,glob_html = ['src/index.ejs']

	
gulp.task('scripts',function O_script(c){
	console.log('------------------------------\n\t#正在处理JS相关文件\n------------------------------')
	gulp.src( glob_scripts ,{since:gulp.lastRun( 'scripts' )} )
	.pipe( One.sourcemaps.init() )
	.pipe( p_01() )
	.pipe( One.cached( 'scripts' ) )
	.pipe( p_05() )
	.pipe( One.remember() )
	.pipe( One.concat( 'main.js' ) )
	.pipe( One.sourcemaps.write('./map',{sourceRoot:'js-source'}) )
	.pipe( gulp.dest( 'dist/scripts' ) );
	c();
	console.log('------------------------------\n\t#JS处理完成\n------------------------------')
	/*(( 
		#1 风格语法错误 =>  压缩 => 合并
 		#2 修改监听 =>  更新执行 
		#3 删除监听 =>  缓存内指定删除
		
		## 只生成一个独立文件 
	))*/
});
gulp.task('styles',function(c){
	console.log('------------------------------\n\t#正在处理STYLE样式相关\n------------------------------')

	gulp.src( glob_styles )
	.pipe( p_01() ) //# 源代码是否可以正确编译 # 289m
	.pipe( One.order(['**/*.css','src/css/**.css','src/less/*.less']) ) //# 排序要在处理?
	.pipe( One.less() )
	.pipe( p_02() ) //# css 优化
	.pipe( One.concat( 'main.css' ) )
	.pipe( gulp.dest('dist/styles') )
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
gulp.task('html',function(c){
	console.log('------------------------------\n\t#正在处理HTML相关\n------------------------------')
	gulp.src( glob_html )
	.pipe( One.ejs( {msg:'hello world!!!'},{},{ext: '.html'} ) )
	.pipe( gulp.dest('dist') );
	c();
	console.log('------------------------------\n\t#HTML处理完成\n------------------------------')
	/*((
		#1 ejs 语法报错(很重要)+编译+优化 ==>输出一个独立文件. //# 不建议输出多个文件。
		#2 修改监听 ejs 主模块+ejs子模块 监听 ==> ( 不需要缓存==> 独立文件编译。 )
		#3 删除监听 ## 没有缓存的关系, ejs 编译的时候会不会出错???
	))*/
})


gulp.task('images',function(c){
	console.log('------------------------------\n\t#正在处理图片相关\n------------------------------')
	gulp.src( glob_images ,{since:gulp.lastRun('images')})
	.pipe( One.imagemin() ) //## 图片压缩imageMin()
	.pipe( gulp.dest('dist/images') );
	c();
	console.log('------------------------------\n\t#图片处理完成\n------------------------------')
	/*((
		## 压缩 + 转移 ## 有必要进行缓存吗?? 没必要
		## 修改监听 => 
		## 删除监听 => 根据文件名进行删除生成文件
		
		## 生成多个文件
	))*/
});
gulp.task('sp',function(c){//# 雪碧图
	console.log('------------------------------\n\t#正在处理雪碧图\n------------------------------')
	gulp.src('src/images/sp_*.{jpg,png}') //One.spritesmith
	.pipe( sp( { imgName:'./images/sp.png',cssName:'./styles/sp.css',padding:5} ) )
	.pipe( gulp.dest( 'dist' ) )
	c();
	console.log('------------------------------\n\t#雪碧图处理完毕\n------------------------------')
});
gulp.task('fonts',function(c){
	console.log('------------------------------\n\t#正在处理字体相关\n------------------------------')
	gulp.src( glob_fonts )
	.pipe( gulp.dest('dist/fonts') );
	c();
	console.log('------------------------------\n\t#字体处理完毕\n------------------------------')
	/*((
		#1 转移文件 ## 修改的可能性不高 ## 添加文件+ 字体增加(修改)
		#2 监听依赖文件 + 和自定义文件 ==> 文件进行转移
		#3 删除 => 根据文件名进行删除.
	))*/
});
gulp.task('media',function(c){
	console.log('------------------------------\n\t#正在转移媒体相关文件\n------------------------------')
	gulp.src('src/media/*.{mp4,mp3}')
	.pipe( gulp.dest( 'dist/media' ) )
	c();
	console.log('------------------------------\n\t#转移完毕\n------------------------------')
});
gulp.task('swf',function(c){
	//## ###
	c();
});
gulp.task('server',function(c){

	bSync({
		server:{baseDir:['dist','app']}
		,port: 7741
		,files:['**']
		,browser: ['chrome', 'firefox'][0]
		,https: false
		,open:false
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
gulp.task('clean',function(c){
	console.log('------------------------------\n\t#正在删除生成的文件\n------------------------------')
	return del(['dist','temp']);
	c();
	console.log('------------------------------\n\t#删除完毕\n------------------------------')
	/*((
		## 删除生成文件 ## 在编译前删除掉之前生成的文件.
	))*/
});

gulp.task('help',function(e){
	//## npm install  
	//## bower install 
	
	e();
	/*((
		//##　查看帮助指令
	))*/
});
gulp.task('zip',function(e){

	console.log('------------------------------\n\t#正在进行备份\n------------------------------')
	gulp.src(['src/**/**','gulpfile.js','bower.json'])
	.pipe( One.zip( path.basename(__dirname)+'_'+time('YYMMDDHHmmss')+'.zip' ) )
	.pipe( gulp.dest( 'history' ) )
	e();
	console.log('------------------------------\n\t#备份已完成\n------------------------------')
	/*((
		//## 源码部分进行打包。 //##
	))*/
});

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
		,gulp.parallel('images','fonts','scripts','styles','html','media','swf') //#2 并列执行
		,'server'//#3 启动浏览器
		,function watcher(c){ //## 把这个写入server 也不错???!!!
			var watch_script,watch_styless,watch_html,watch_images,watch_dist; 
			
			//## 监听1
			watch_scripts = gulp.watch( ['src/scripts/*.js'],gulp.parallel('scripts') ); //# js 文件发生修改
			watch_styless = gulp.watch( glob_styles ,gulp.parallel('styles') ); //# css 文件发生修改
			watch_html = gulp.watch( ['src/**/*.ejs'],gulp.parallel('html') ); //# html 发生修改
			watch_images = gulp.watch( glob_images ,gulp.parallel('images') ) //# 图像文件发生修改
			watch_fonts = gulp.watch( ['src/fonts/*.{eot,ttf,svg,woff}'],gulp.parallel('fonts') ) //# 发生添加字体
			watch_dist = gulp.watch( ['dist/**/*'] )//# 目录内文件发生修改.
			
			
			//## 监听On
			watch_scripts.on('unlink',function(p){
				//# 缓存删除太麻烦!! ##
			});
			watch_images.on('unlink',function(e){
				console.log('图片发生删除',e); //## 修改文件名会触发!!!
				//path.basename(filepath)
			}).on('change',function(){
				console.log('图片发生修改增加') //## 
				//gulp.parallel('images') ## 还有很多要学!!!!
			});
			watch_dist.on('change',bSync.reload);  //## 浏览器核心刷新
			
			c();
		}//#4 注册监听
	)
);

gulp.task('text',function(c){
	console.log(111222);
	gulp.src('src/*.txt',{since: gulp.lastRun('text')})
	.pipe( One.concat('aaaa.txt') )
	.pipe( One.rename({suffix:'.min'}) )
	.pipe( gulp.dest('dist') )
	//.pipe( One.abc() );
	c();
})
//{since: gulp.lastRun('html')}