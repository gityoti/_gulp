var gulp = require('gulp')
    // , gulpLoadPlugins = require('gulp-load-plugins')
    // , One = gulpLoadPlugins({pattern: ['gulp-*']})
    //, path = require('path')
    , requireDir = require('require-dir')
    , dir = requireDir('./tasks')
    , bSync = require('browser-sync')
    , _method = require('./method/method.js')
    , pathConfig = require('./method/pathConfig.js')
    , log = console.log

gulp.task('default',
    gulp.series(
        'clean'
        , 'sp'
        , 'styles'
        , 'scripts'
        , gulp.parallel('images', 'fonts', 'html', 'media', 'swf')
        , 'server'
        , function watcher(c) {

            var watch_scripts, watch_styles, watch_html, watch_images, watch_dist, watch_sp, watch_fonts, watch_media,
                watch_swf,
                link_scripts, link_styles, link_html, link_images, link_sp, link_fonts, link_media, link_swf, link_dist,
                file_images, file_fonts, file_media, file_swf;

            link_scripts = _method.mergeLink(pathConfig.path.root.src, pathConfig.path.scripts.listen);
            link_styles = _method.mergeLink(pathConfig.path.root.src, pathConfig.path.style.listen);
            link_html = _method.mergeLink(pathConfig.path.root.src, pathConfig.path.html.listen);
            link_images = _method.mergeLink(pathConfig.path.root.src, pathConfig.path.images.listen);
            link_sp = _method.mergeLink(pathConfig.path.root.src, pathConfig.path.sp.listen);
            link_fonts = _method.mergeLink(pathConfig.path.root.src, pathConfig.path.fonts.listen);
            link_media = _method.mergeLink(pathConfig.path.root.src, pathConfig.path.media.listen);
            link_swf = _method.mergeLink(pathConfig.path.root.src, pathConfig.path.swf.listen);
            link_dist = [pathConfig.path.root.src + '/**/*'];

            file_images = _method.mergeLink(pathConfig.path.root.dist, pathConfig.path.images.dist);
            file_fonts = _method.mergeLink(pathConfig.path.root.dist, pathConfig.path.fonts.dist);
            file_media = _method.mergeLink(pathConfig.path.root.dist, pathConfig.path.media.dist);
            file_swf = _method.mergeLink(pathConfig.path.root.dist, pathConfig.path.swf.dist);

            watch_scripts = gulp.watch(link_scripts, gulp.parallel('scripts'));
            watch_styles = gulp.watch(link_styles, gulp.parallel('styles'));
            watch_html = gulp.watch(link_html, gulp.parallel('html'));
            watch_images = gulp.watch(link_images, gulp.parallel('images'));
            watch_sp = gulp.watch(link_sp, gulp.parallel('sp'));
            watch_fonts = gulp.watch(link_fonts, gulp.parallel('fonts'));
            watch_media = gulp.watch(link_media, gulp.parallel('media'));
            watch_swf = gulp.watch(link_swf, gulp.parallel('swf'));
            watch_dist = gulp.watch(link_dist);

            _method.setFile(watch_images, file_images);
            _method.setFile(watch_fonts, file_fonts);
            _method.setFile(watch_media, file_media);
            _method.setFile(watch_swf, file_swf);

            watch_dist.on('change', bSync.reload);

            c();
        }
    )
);

