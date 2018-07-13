var gulp = require("gulp")
,gulpLoadPlugins = require('gulp-load-plugins')
,One = gulpLoadPlugins({pattern: ["gulp-*","gulp-utf8-*"]}) //# 插件载入
,path =  require('path') //#
,del = require('del')
,laz = require('lazypipe') //## 延迟
,build = false //## 压缩+混淆
,lock = false //##

//### 通用管道管理!!!
,p_01 = laz().pipe( One.plumber,{errorHandler:function(e){One.util.beep(),One.util.log(e.nanegul)}} ) //# 抛出文件错误内容
,p_02 = laz()
	.pipe( One.autoprefixer,{browsers: ['last 10 versions'],cascade: false} )//#css前缀
	.pipe( One.cleanCss,{debug: false},function(e){ false&&console.log(e)} )//# css压缩
,p_03 = laz().pipe( One.csslint,{'shorthand': false} ).pipe( One.csslint.formatter )//# 验证 css
,p_04 = laz().pipe( One.babel,{presets: ['es2015']} )//# es6 语法转 es5 ## 编译太慢了
,p_05 = laz()
	.pipe( One.uglify,{compress: false,mangle:{toplevel:true,reserved: ['$',"Jquery"]}} )//##js 压缩。
,p_06 = laz()
	.pipe( One.jshint/*,{"unused":0,"undef":0,"white":0,"nomen":0,"bitwise":0,"onevar":0}*/ )
	.pipe( One.jshint.reporter,'default' )//# JS代码风格 ||  jshint-stylish | stylish | default
	//# 最后优化打磨的时候要用到.
	
	
//console.log(123,path.basename(__dirname),"################",path.relative(path.basename(__dirname), '_gulp/orandea/impl/bbb'));
//## 求出2个地址的相对地址? ## 当前目录 + 引用文件目录

var config = { //## 文件源 + 输出路径 ## 通过json文件独立出来。
    ejs: {
        src: ['./app/*.ejs'],
        dest: './dest',
        filelist: ['app/index.ejs', 'app/service.ejs', 'app/gameInfo.ejs', 'app/newslist.ejs']
    },
    arttemplate: {
        src: ['./app/*.html'],
        dest: './dest'
    },
    less: {
        src: ['./app/style/*.scss'],
        dest: './dest/css'
    },
    image: {
        src: ['./app/images/*.{png,jpg,gif,ico}'],
        dest: './dest/images'
    },
	script:{
		src:[''], //## 页面脚本要独立!!!## 外部依赖的文件也不一样. || A页面依赖 bootstrap ,B页面依赖 fullPage  || 都写入一个JS 文件里面不合理
		dest:'./dest/js'	
	}
};

gulp.task("help",function(){
	//#指令查询
	console.log(1111)	
	console.log(2222)
	console.log(3333)
	console.log(4444)
	/*((
		One.concat( flieName ) # 文本进行合并
		One.rename( flieName|obj ) # 文件重命名
		One.replace( "a","v" ) # 内容进行替换
		del([path]) #删除文件
		
		One.utf8Convert() # txt 文件转utf-8
		
		One.plumber() # 错误抛出
		One.util # 错误处理工具 ##
		
		## css类型
		One.less() # 编译less 文件
		One.minifyCss() # 压缩css流 ||=>One.cleanCss() ## 替代
		One.autoprefixer() # css 前缀
		
		## html类型
	))*/
})
gulp.task("less1",function(){
	//#less文件编译
});
gulp.task("ejs1",function(){
	//#ejs文件编译	
});
gulp.task("img",function(){
	//#img文件处理	
});


gulp.task("default",[],function(){
	//#默认执行
	console.log("##正在执行默认task!!##")
});
gulp.task("t1",function(){
	//## 删除+合并+改名+内容替换.
	gulp.src("src/*txt")
	.pipe( One.concat("all.txt") )
	.pipe( One.utf8Convert() )
	.pipe( gulp.dest("dist") )
	.pipe( One.rename({suffix:".m1"}) )
	.pipe( gulp.dest("dist") )
	.pipe( One.replace("不","~") )
	.pipe( One.rename({suffix:".m2"}) )
	.pipe( gulp.dest("dist") )
	
	console.log("删除+合并+改名+内容替换")
	//One
});
gulp.task("t2",function(){
	//# 
	gulp.src("src/*.txt",{since: gulp.lastRun('t2')})
	.pipe( One.cached() )
	.pipe( gulp.dest("aaa") )
});
gulp.task("del",function(){
	del( ["dist/*txt"] )
	/*((
		//# 文件删除!!# 生成之前要将历史文件进行清除!!否则文件编译错误无法观测。
	))*/
});

gulp.task("ejs",function(){
	gulp.src("*.ejs")
	.pipe( p_01() ) //## ejs 有无语法错误
	.pipe( One.ejs({msg:'Hello Gulp55555!'},{},{ext: '.html'}) ) //## ejs=>html
	.pipe( gulp.dest("dist") )
	.pipe( One.livereload() )
	/*(( 
		## ejs 文件编译 ##
		
	))*/
});
gulp.task("less",function(){
	gulp.src("src/less/*.less")
	.pipe( p_01() ) //# less 有无语法错误
	.pipe( One.less() ) //# .less=>.css
	.pipe( One.if( build,p_02(),p_03() ) ) //# css 流的优化.
	.pipe( gulp.dest("dist/css") )
	/*((
		#编译 less 文件 ## 有些文件是 css 格式的要怎么处理??
	))*/
});
gulp.task("js",function(e){
	//#js文件编译	 gulp-jshint  One.jshint() || One.jshint.reporter('YOUR_REPORTER_HERE')
	gulp.src("src/js/*.js")
	.pipe( p_06() ) //# 验证代码格式
	//.pipe( p_04 ) //# 转es5 ||性能差
	.pipe( p_01() ) //# 没法抛出错误? 格式验证??
	.pipe( p_05() ) //# js压缩+变量混淆
	
	.pipe( gulp.dest("dist/js") )
});
gulp.task("server",function(){
	//# 启动一个服务。
	gulp.src('./dist').pipe( One.webserver({port:1000,open:true,fallback: 'index.html'}) )	
});
gulp.task("watch",["server","ejs"],function(){
	One.livereload.listen({start:true});
    gulp.watch('*.ejs',["ejs"]);
	gulp.watch("dist/**/*",One.livereload) //## 刷新浏览器!!! 这样可能会比较好.
	/*(( 
		## 任务监听!! ##
	))*/
});


/*(( ## 本地服务器 ##
	port:1000 #服务器端口
	host: '172.0.0.1'#服务器地址
	open:true #自动打开浏览器
	fallback: 'index.html' # 设置主页文件
	livereload:false # 自动刷新
))*/