
## gulp 项目调试
###     **配置信息**
`gulp4.0`+`ejs`+`less`+`javascript`
###     watch 监听||事件 `watch.on('unlink',fn)`
    `unlink` 链接发生删除
    `change` 文件发生修改


###     **其他**
    **问题**:`gulpfile.js 代码太过庞杂,将代码分割成多个xx.JS文件(任务进行分离),太多文件写入可读性太差了
    **解决**:`使用 require('require-dir') 插件将任务进行模块化!

    **问题2** 监听状态下,修改其他依赖文件 无法自动再次编译，只有编译主文件的时候才生效
    **原因2** 使用 require('gulp-imports') 插件进行导入 ==> 替代了 concat 合并操作
    **优点2** 省去了合并过程 与 排序优先级的问题。
    **解决2** 删除缓存这个流程,不然缓存得不到更新,无法执行自动编译操作。

    **问题3** 为什么图片文件增加删除都无法顺利触发任务?
    # 雪碧图! ==> 使用less 进行导入即可! ==> 输出路径需要考虑一下!
###     **文件规划**
    `config.json` 存放 `资源路径`+`输出路径`+`监听路径`
###     **模式规划**
    `设计模式`+`部署模式`
            1) 设计模式
                1. 不输出 sourcemaps 2. 风格验证  3.不压缩( 逻辑上有冲突!不压缩那要map干什么? # 依赖导入后分不清是那个文件的错。 )
                4. 建议不要压缩 ==> 输出 sourcemaps就没有意义了!
                5. 需要风格检验的文件链接 ~~ 监听路径.  ==> 需要再开一个任务.( 专门用于验证风格 js+css )
            2) 部署模式
                1. 进行压缩 2.输出sourcemaps
###     **任务规划**
1.  删除生成文件[ `clean` ]
2.  源文件备份  [ `zip` ]
3.  html编译  [ `html` ]
4.  styles 编译 [ `styles` ]
5.  scripts 编译 [ `scripts` ]
6.  images 编译  [ `images` ]
7.  sp 编译  [ `sp` ]
8.  字体文件 [`fonts`]
9.  媒体文件 [`media`]
10. swf文件 [`swf`]
11. 代码风格验证 [ `hint` ]
12. 浏览器服务 [ `server` ]
###


## less
    `@import (css) "../css/reset.css"` less 文件导入其他样式文件
    内部导入的方式,解决排序上下文的关系 ==> 废弃了合并操作。
## ejs
    `<% include ejs/header.ejs %>` 模块的插入

## bower(放弃)
    放弃使用,加载的文件需要频繁的配置 gulpfile.js 文件,引入自己用的文件也是很狗血,充当一个插件下载库还不错
    市面上很多插件都没有配备完善的配置,导致一些版本无法加载正确的路径 ==> 改用手动稳定一点
## yoman (放弃)
    配置语法不熟悉 , 暂时不要花太多时间去处理这个(暂时不学习)

## 图标文字
    # http://www.fontawesome.com.cn/
    # 不知道需求是否能够满足

 这是一个图片 ![图片的描述信息](https://upload-images.jianshu.io/upload_images/6860761-fd2f51090a890873.jpg "鼠标移过显示标题")
 这是一个超链接 [git](http://github.com)
## markdown 语法测试
1. `[链接描述](url "title")`
2. `![图片描述](url "title")`
3. `**这是加粗的文字**` **这是加粗的文字**
4. `*这是倾斜的文字*` *这是倾斜的文字*
5. `***这是斜体加粗的文字***` ***这是斜体加粗的文字***
6. `~~这是加删除线的文字~~` ~~这是加删除线的文字~~

## 注意事项
    表格 || 代码高了 左侧都不可以包含其他东西!!!

## 列表语法 -+*
## 表格语法
[表格在线配置](http://www.tablesgenerator.com/)
|sad|hasj|kdha|sjk|dsa|
|:--|--:|:--:|--|--|
|1+2|2+3|3+4|4+5|5+6|
|a+b|c+d|e+f|g+h|j+k|
|444|555555|66666|77777|888888|

## 代码高亮
[高亮配置](https://www.jianshu.com/p/5df593b23dbf "配置")
``` css
    .a{background:red}
    .b{background:green; padding: 2px 10px 2px 1px}
```
``` javascript
    var arr =[1,2,3]
    var obj = {"name":'yoti',"age":"111"}
    function fn(a,b,c){
        return a+b+c;
    }
    fn(1,2,3)
    if(1){
        console.log(1)
    }else{
        console.log(0)
    }
```

## 任务规划
- [x] 完成 -空格[x] 空格 描述
- [ ] 未完成
- [x] 完成
- [ ] 加急

## gulp 插件列表
名称|描述|其他
--|--|--
合并|gulp-concat|2
删除|del|1