// "use strict";
window.onload = function (ev) {
    //#1 禁止使用位運算符 & | ~ ^ << >> 6大元算符
    var bitw01 = 1&2;
    var bitw02 = 1|2;
    var bitw03 = ~2;
    var bitw04 = 1 ^ 2;
    var bitw05 = 1 << 2;
    var bitw06 = 1 >> 2;

    //#2 if/while 不允許省略 {}?
    var If01;
    if(0)
        If01=0;
    while(0)
        If01++;
    for(var i=0;i<5;i++)
        If01=i;

    //#3 禁止使用 == || != > 替代成(嚴格模式) === || !==
    var If02 = 0;
    var B01 = If02 == 0;
    var B02 = If02 != 0;

    //#4 esversion 3 5 6~ 不知道有什麽用 ==> 控制js 語法使用es6 或者es5?
    //#5 forin for in 循環遍歷對象的時候可能會獲取到不需要的屬性 。 ==> 原型繼承的對象# 過濾掉繼承的屬性
    var obj01 = {age:20,name:"Jm"};
    for( i in obj01 ){
        if( obj.hasOwnProperty(i) ){ //# 過濾掉繼承來的屬性!!
            console.log( obj01[i] );
        }
    }
    //#6 freeze 禁止覆蓋(修改) 原型上的原生方法。
    Array.prototype.count = function (value) { return 4; }; //# 修改原生方法
    //#7 futurehostile 未知#
    //#8 globals:{"MY_GLOBAL": true} 設置白名單 ?? ==> 配合 undef 使用
    //#9 latedef 禁止變量在定義前使用變量 # 定義必須在調用前面,否則報錯
    function late01() {
        //# 在定義前調用。
        alert( var01 );
        var var01 = '522203003';
    }
    //#10 maxcomplexity
    //#11 MAXDEPTH ==>嵌套深度 ## 不清楚規則是什麽?
    function MAXDEPTH01(meaning) {

    }

    //#12 evil 函數 ## 禁止使用 eval 函數
    eval('function(){alert(123)}');

    //#13 maxparams 設置最大的形參數
    function param01 (a,b,c,d,e,f) {
        /*!定義了形參最多不超過5個*/
    }
    //#14 maxstatements 函數最大語句數量
    function param02(){
        /*!最多不得超過4個語句# 報錯正常!!*/
        alert(1);
        alert(1);
        alert(1);
        alert(1);
        alert(1);
    }

    //#15 newcap 構造函數必須大寫 ## 有效 || nonew - new 構造函數 必須使用變量接受
    function cap01(){
        this.p = "I’m in constructed object";
        this.alertP = function(){
            alert(this.p);
        }
    }
    var o2 = new cap01(); //# 小寫會報錯
    new cap01(); //# 不使用變量接受要警告。

    //#16 nocomma 禁止使用 "," # 不詳!
    var comma01,comma02,comma03,comma04,comma05;

    //#17 predef # 未知
    //#18 shadow # 禁止使用全局變量? # 未知規則
    var g01=123,g02=456,g03=789;

    function gfn01() {
        console.log(g01);
    }
    //#19 singleGroups 未知.
    //#20 strict ==> 頁面中必須定義  "use strict";  ==> 嚴格模式造成很多代碼錯誤。 ==>啓用嚴格模式
    //#21 varstmt ==> 似乎是es6 ==> 需要使用 let const 方法來聲明變量
    //#22 ASI ==> 似乎無效?? 不知道具體作用
    //#23 boos ==> for () 内進行其他賦值 ==> 寫法比較特殊 ## 坏屬性
    //for (var i = 0, person; (person = people[i]); i++) {} //# 不會寫這麽奇葩的吧,做個筆記。
    if (0) {}
    //# 24 
};