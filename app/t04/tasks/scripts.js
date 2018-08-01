var gulp = require('gulp')
,gulpLoadPlugins = require('gulp-load-plugins')
,One = gulpLoadPlugins({pattern: ['gulp-*']})
,gulpImports = require('gulp-imports')
//,config = require('../src/config')
,_method = require('../method/method.js')
,plugConfig = require('../method/plugConfig.js')
,pathConfig = require('../method/pathConfig.js')

gulp.task('scripts',function O_script(c){

    _method.setMsg('正在处理JS相关文件');
    gulp.src( _method.mergeLink(pathConfig.path.root.src,pathConfig.path.scripts.src) )
        .pipe( One.sourcemaps.init() )
        .pipe( One.imports() )
        .pipe( One.uglify( plugConfig.uglify ) )
        .pipe( One.sourcemaps.write('./map',{sourceRoot:'js-source'}) )
        .pipe( gulp.dest( _method.mergeLink(pathConfig.path.root.dist,pathConfig.path.scripts.dist) ) );
    c();

});
