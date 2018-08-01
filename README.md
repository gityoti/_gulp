
## gulp 项目调试
###     **配置信息**
`gulp4.0`+`ejs`+`less`+`javascript`

### 增加一個安裝的 md 文件。

事件|描述
---|---
`unlink`|链接发生删除
`change`|文件发生修改
`add`|文件发生增加

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

任务名称|描述
---|---
`clean` |删除生成文件
`zip`|源文件备份
`html`|html编译
`styles`|styles 编译
`scripts`|scripts 编译
`images`|images 编译
`sp`|雪碧图 编译
`fonts`|字体文件转移
`media`|媒体文件转移
`swf`|播放器文件转移
`hint`|代码风格验证
`server`|浏览器服务
`merge`|html 资源打包



## gulp 插件列表
### 基本类型
插件名称|插件描述|补充说明
--|--|--
`gulp-concat`|合并|-
`gulp-rename`|重命名|-
`del`|删除|-
`gulp-load-plugins`|插件导入|gulpfile.js代码简约的很多
`require-dir`|任务模块化|将gulpfile.js分割成多个小任务,简约了很多
`lazypipe`|pipe延迟|挺好用的,流程复用。
`gulp-plumber`|编译报错工具|-
`gulp-util`|编译错误be一声|-
`slash`|配合删除缓存使用|-
`gulp-cache`|文件缓存|-使用缓存有效提高编译速度
`gulp-remember`|还原缓存内容|配合缓存插件使用
`browser-sync`|浏览器插件|编译刷新的核心
`time-stamp`|时间戳插件|-
`gulp-zip`|文件打包|开发的时候进行迭代,将资源文件进行打包保存
`gulp-sourcemaps`|记录所有的编译记录|可以看到编译前的内容

### JS相关
插件名称|插件描述|补充说明
--|--|--
`gulp-jshint`|JS代码风格验证|-
`gulp-uglify`|压缩JS代码|-
`gulp-imports`|JS导入插件|可以像less一样将需要的依赖文件加载进来,舍弃了合并排序等操作
`gulp-babel`|es6转es5|编译起来会卡住

### CSS相关
插件名称|插件描述|补充说明
--|--|--
`gulp-csslint`|CSS代码风格验证|-
`gulp-autoprefixer`|CSS添加前缀|-
`gulp-clean-css`|CSS压缩|-
`gulp-less`|less文件编译|-

### HTML相关
插件名称|插件描述|补充说明
--|--|--
`gulp-ejs`|ejs文件编译器|-
`gulp-htmlmin`|html压缩|-
`gulp-inline-source`|js css 资源打包| css js 写入html 文件,减少http请求

### 图片相关
插件名称|插件描述|补充说明
--|--|--
`gulp-imagemin`|图像压缩插件|-
`gulp.spritesmith`|雪碧图插件|-

### 更新日志
`18-07-29`

    1) 增加了html压缩功能呢
    2) 增加了资源打包功能,减少http请求。
    3) http://www.faviconico.org/favicon 图标在线制作
    4) http://www.tablesgenerator.com/ markdown 表格生成
    5) http://www.fontawesome.com.cn 字体图标库
    6) https://www.jianshu.com/p/5df593b23dbf markdown 代码高亮
    7) 文件发生添加 => 进行自动转移 => 雪碧图不需要使用 最后一次修改!!(没有发生转移)
    8) `a/b/c.txt` 会正常取得文件, 而`\\a\\b\\c.txt` 会把整个路径进行转移(需要进行正则转义)。
    9) 增加了 路径监听=> 文件删除事件 和 文件增加事件的处理方法 ==> 增加了 '\\' 转义方法
    10) 代码风格验证需要完善一下。

`19-07-30`

    1) gulp 使用命令行传参
    2) ejs 进行多页面数据绑定,检测数据文件是否存在.
    3) css js 代码风格验证要处理一下
    4) 插件配置獨立到 plugConfig.js 文件下面,進行集中管理 ok
    5) config.json 來管理 項目路徑不合理 ==> 調整為 pathConfig.js 來進行路徑管理。ok
    6) js 目錄需要進行一下調整 ==> 放在一級目錄不合適 ==> 那麽庫文件要怎麽處理? ==> 其實這樣也不錯!

`19-07-31`

    1) 增加 `媒體`,`字體`,`圖片`,`播放器文件` 文件增加刪除等自動化操作。
    2) css 代碼驗證處理不了 less 文件, less 文件編譯錯誤會報錯嗎?
    3) !important 使用越多,説明對 css 的掌控力越弱。
    4) less 使用 plumber 來進行驗證(處理不了格式;)
    5) css 使用 csslint 進行格式驗證()
    6) css 驗證( https://blog.csdn.net/kaosini/article/details/44086113 )

`19-08-01`
    1) JSHINT http://jshint.com/docs/options/
    2) http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html javascript 提升.
    3) https://blog.csdn.net/liuhe688/article/details/51001776 JS嚴格模式

`Other`
    1) less `@import (css) "../css/reset.css"` less 文件导入其他样式文件
        内部导入的方式,解决排序上下文的关系 ==> 废弃了合并操作。
    2) `<% include ejs/header.ejs %>` 模块的插入 ejs 模塊導入
    3) bower(放弃)
        放弃使用,加载的文件需要频繁的配置 gulpfile.js 文件,引入自己用的文件也是很狗血,充当一个插件下载库还不错
        市面上很多插件都没有配备完善的配置,导致一些版本无法加载正确的路径 ==> 改用手动稳定一点
    4) yoman (放弃)
        配置语法不熟悉 , 暂时不要花太多时间去处理这个(暂时不学习)

