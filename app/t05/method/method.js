var qq = 522203003 //# 怎麽增加作者信息?
,gulp = require('gulp')
,del = require('del')
,path = require('path')

exports.abc = function(){
    console.log(qq,'这是方法文件定义的一个函数');
};
exports.add = function (file,traget) {
    //console.log('检测到文件增加',file);
    return gulp.src( exports.setPath(file) ).pipe( gulp.dest( traget ) );
    //# 检测到文件增加就进行转移
};
exports.del = function (file,traget) {
    //console.log( '检测到文件删除',exports.setPath(traget+path.basename(file)) );
    return del( exports.setPath(traget+path.basename(file)) ) //# 删除指定目录下的文件
    //# 根据文件名删除文件 # 组合出正确的路径 # 取得文件名称
};

exports.setPath = function (file) {
    return file.replace(/\\/gi,'/')
    //# 路径 '\' 转换成 '/' , 不然会将整个文件夹都写入。
};
exports.setMsg = function (msg) {
    var Line = '- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -';
    console.log(Line+'\n\t#'+msg+'\n'+Line)
    //# 表单美化
};
exports.setFile = function ( obj,dir ) {
    obj.on('unlink',function(e){
        exports.setMsg('链接:'+e+'发生删除');
        exports.del(e,dir) //# 需要指定目錄才能夠刪除。
    }).on('add',function (e) {
        exports.add(e,dir);
        exports.setMsg('链接:'+e+'发生添加');
    }).on('change',function (e) {
        exports.setMsg('链接:'+e+'发生編輯修改');
    })
  //# 處理監聽對象的 增加 || 刪除 等行爲 ==> 繼續文件的同步刪除增加行爲
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