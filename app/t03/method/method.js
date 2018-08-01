var qq = 522203003;
var gulp = require('gulp');
var del = require('del');
var path = require('path');
var regexp01 = /\\/gi;

exports.abc = function(){
    console.log(qq,'这是方法文件定义的一个函数');
};

exports.add = function (file,traget) {
    console.log('检测到文件增加',file);
    return gulp.src( exports.setPath(file) ).pipe( gulp.dest( traget ) );
    //# 检测到文件增加就进行转移
};
exports.del = function (file,traget) {
    console.log( '检测到文件删除',exports.setPath(traget+path.basename(file)) );
    return del( exports.setPath(traget+path.basename(file)) ) //# 删除指定目录下的文件
    //# 根据文件名删除文件 # 组合出正确的路径 # 取得文件名称
};

exports.setPath = function (file) {
    return file.replace(/\\/gi,'/')
    //# 路径 '\' 转换成 '/' , 不然会将整个文件夹都写入。
};

exports.mergeLink = function mergeLink(root,src){ //# 组合链接
    var links,i;
    if( typeof src =='object' ){
        links = [];
        for( i in src ){
            links[i]=root+src[i] //# 返回一个新组合的数组
        }
    }else{
        links = '';
        links = root+src; //# 返回一个字符
    }
    return links;
    //## 合并成一个合理的文件路径
};