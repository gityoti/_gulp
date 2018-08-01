var gulp = require('gulp')
,gulpLoadPlugins = require('gulp-load-plugins')
,One = gulpLoadPlugins({pattern: ['gulp-*']})
,pathConfig = require('../method/pathConfig.js')
,plugConfig = require('../method/plugConfig.js')
,_method = require('../method/method.js')

gulp.task('jshint',function (c) {
    _method.setMsg('正在验证js文件风格')
    gulp.src('src/scripts/jshintTest.js')
        .pipe( One.jshint({
            bitwise:false, //# 禁止使用位運算符
            eqeqeq:false, //# 使用 === 替代 == || !== 替代 !=

            curly:false, //# if/while 省略{}
            forin:false, //# 遍歷的時候需要過濾掉繼承下來的屬性。
            freeze:false, //# 禁止修改原型上的原生方法

            latedef:false, //# 禁止在變量定義前使用變量
            //MAXDEPTH:0, //# 嵌套深度# 未知
            //MAXERR:1, //# 未知 ==> 多少條錯誤會停止分析
            evil:false, //# 禁止使用eval() 函數 ==> 不安全
            maxparams:5, //# 設置函數最大形參格式
            maxstatements:4 ,//# 函數内語句數量不得超過4
            esversion:5, //# 選擇脚本的版本
            varstmt:false, //# es6 聲明變量 let const 來聲明變量
            newcap:false, //# 構造函數必須大寫
            nonew:true, //# 構造函數必須由一個變量接收
            nocomma:false,//# 沒有逗號 不清楚用途# 未知
            //shadow:true,// 未知
            strict:false, // 啓用嚴格模式?

            undef:false, //# 禁止使用未聲明的變量
            unused:false, //# 未使用過的變量
            globals:{"alert":true,"console":true}, //# 白名單 #未知# 配合白名單 ??? 爲什麽白名單無效?需要json 格式進行白名單設置 ==> 估計要配置一個json
            ASI:false, //# 分號警告
            boos:true, //# 拼寫錯誤? Bad option: 'boos' //# 坏屬性?

        }) ) //# 风格设置
        //.pipe( One.jshint.reporter() ) //# 风格错误输出 ## 要能吧提示设置为中文就好了!!
        .pipe( One.jshint.reporter('default') );

        // {"undef": true,"unused": false}
    c();
    /*
        bitwise- 禁止使用位運算符。( jq 中使用的比較多 )
            # & | ^ ~ << >> <<< >>>
    */
});

//# 做一個測試的範例!! ==> 不要再原主要路徑上使用。
gulp.task('stylhint',function(c){
    _method.setMsg('正在验证css文件风格')
    // ['src/css/*.css','src/less/**/*.less','src/*.less']
    gulp.src( ['src/css/stylhintTest.css'] ) //## 验证less 格式。
        //.pipe( One.less() )
        //.pipe( One.csslint() ) // {'shorthand':false}
        //.pipe( One.csslint.formatter('compact') ) //#

    c();
    /*
        #錯誤輸出格式
        [text,compact,lint-xml,csslint-xml,checkstyle-xml,junit-xml]

        css
            - !important 禁止使用,
            - .foo.bar class 連著這種格式再ie6 下是不支持的 # 禁止相鄰的類
            - 屬性不存在 + 值不合規則 => 帶前綴 -moz 的這種可以(使用已知的屬性值)
            - box-sizing ie6 7 不支持這個屬性
            - 適合的display 屬性要使用正確的屬性。
                #1 display:block 禁止使用 vertical-align
                #2 display: inline-block 禁止使用 float
                #3 display: table-* 禁止使用 margin 和 float
                #4 display: inline 禁止使用寬高。
            - @font-face eto 字體需要在後面添加 ?#iefix ; # 不然字體會加載錯誤?
            - a[xx^=xx] 禁止這種正則選擇器?
            - 檢測 background url() 所使用的圖片衹能使用一次，使用2次以上就會報錯
            - 屬性依照字母排序排列
            - 屬性重複 ==> 似乎無效
            - 空也是表,沒有屬性和值, ==> 似乎無效
            - 後備顔色#  rgba()帶透明值, 必須有一個後備顔色, 必須是不帶透明的 。
            - 減少font-size 的定義! ==> 都要預先定義! 這樣進行集中管理
                #1 font-size 定義超過9次就會報錯 ,減少font-size 的使用
            - 減少@font-face 的使用
                #1 會影響性能
                #2 定義超過5次就會警告。
            - outline 不詳
            - *width: hack 語法禁止使用"*" ?? 爲什麽要禁止? ==>似乎無效
            - float:使用導致頁面結構容易被破壞。
                #1 破壞頁面結構
                #2 float 使用超過10次 會警告。
            - @import url()
                #1 css 内部導入會造成下載阻塞! ==> 影響性能。
                #2 改用成<link> 方式導入樣式表! ==> 不會造成阻塞
                #3 禁止css内部使用
            - id 選擇器的使用
                #1 導致樣式不靈活,無法重複使用,失去css 的優勢。
                #2 禁止使用id 選擇器。
                #3 頁面上想重複使用這個樣式就很彆扭。
            - ie7 hack _width 禁止使用下劃綫
            - h1~h6 應該作爲頂級樣式
                #1 便於維護
                #2 禁止 .abc h3 {} 這種去定義h3標簽
            - margin-left 這種複合屬性,需要使用簡寫格式 。 ==>
            - text-indent: -9999px;
                #1 text-indent -100以上,  必須配合 direction: rtl 使用,否則報警;
                #2 很好使用,暫時不去研究。
            - [key=xxx] 有類似 "*"通配符的功能,
                #1 非限定的選擇器會影響性能。 => 使用報警
                #2 開頭必須配黑 一個限定選擇器才能提高性能。
            -  "*" 的使用會影響性能，跟上面類似。 || 不會很頻繁的使用。
                #1 必須作爲限定使用
            -  border-radius: 5px;(未測試)
                #1 必須包含標準屬性,
                #2 -moz-border-radius: 5px; 單獨使用前綴就會報錯
            -  屬性值為0 的時候不要跟 單位 "px","em" 否則報錯 # ==> 未測試
    */
});

gulp.task('hint',gulp.series('jshint','stylhint',function (c) {
        //console.log('正在验证代码风格');
        c();
    })
    //## 两部分进行同时验证
);

//## 验证 js 和 css 的风格。 ==> 不要在执行任务的时候进行验证。 ==> 后期打磨的时候会用到。