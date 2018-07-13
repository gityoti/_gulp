var gulp = require("gulp");
var path =  require('path'); //# 


gulp.task("ejs",function(c){
	console.log(123);
	c();
})

gulp.task("default",function(c){
	console.log(4444);
	c();
})

gulp.task("t2",function(c){
	//# 
	gulp.src("src/*.txt",{since: gulp.lastRun('t2')})
	//.pipe( One.cached() )
	.pipe( gulp.dest("aaa") )
	c();
});