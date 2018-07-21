var gulp = require('gulp')
gulp.task('a1',function(c){
    console.log('这是一个外部定义的一个任务')
    console.log('为什么会输出停止呢?')
    return c();
})