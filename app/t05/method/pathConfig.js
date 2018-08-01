//## 项目文件路径设置

exports.path =  {
    "dev": true,
    "root": {
        "tip": "根目录设置",
        "src": "src", //# 這是資源的加載的根目錄
        "dist": "dist", //# 這是輸出目錄;
        "history": "history" //# 備份文件放在這裏面
    },
    "html": {
        "tip": "编译html文件",
        "src": ["/index.ejs","/a.ejs","/b.ejs","/c.ejs"], //# 文件加載路徑 + 配合root 定義的根目錄
        "dist": "/", //# 輸出路徑
        "listen": ["/ejs/*.ejs","/*.ejs","/data/*.json"] //# 監聽路徑
    },
    "style": {
        "tip": "样式文件",
        "src": "/*.less", //# src/*.less 組合后的路徑
        "dist": "/styles/", //# dist/styles/ 組合后的輸出路徑
        "listen": ["/less/*.less", "/css/*.css"] //# src/less/*.less  監聽相關文件是否發生編譯。
    },
    "images": {
        "tip": "图像文件",
        "src": "/images/*.{jpg,png,gif,svg,ico}",
        "dist": "/images/",
        "listen": ["/images/*.{jpg,png,gif,svg}"]
    },
    "sp": {
        "tip": "雪碧图",
        "src": "/images/icon/*.{jpg,png}",
        "dist": "/images/",
        "listen": ["/images/icon/*.{jpg,png}"]
    },
    "scripts": {
        "tip": "脚本文件",
        "src": "/*.js",
        "dist": "/scripts/",
        "listen": ["/scripts/**/*.js","/*.js"]
    },
    "merge":{
        "tip":"资源打包,css js 都写入html 减少http请求",
        "src":"/*.html",
        "dist":""
    },
    "media": {
        "tip": "媒体文件",
        "src": "/media/*.{mp3,mp4}",
        "dist": "/media/",
        "listen": ["/media/*.{mp3,mp4}"]
    },
    "fonts": {
        "tip": "依赖字体文件",
        "src": "/fonts/*.{otf,eot,ttf,svg,woff,woff2}",
        "dist": "/fonts/",
        "listen": ["/fonts/*.{otf,eot,svg,ttf,woff,woff2}"]
    },
    "swf": {
        "tip": "swf相关文件",
        "src": "/swf/*.*",
        "dist": "/swf/",
        "listen":["/swf/*.*"]
    },
    "zip": {
        "tip": "备份",
        "src": ["src/**/**","gulpfile.js","bower.json"],
        "dist": "/"
    },
    "config":{
        "tip":"插件配置参数"
    }
};