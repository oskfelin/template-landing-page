var gulp = require('gulp');
var browserSync = require('browser-sync').create();



gulp.task('default', function() {
    // place code for your default task here
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'page'
        }
    })
});

gulp.task('start', ['browserSync'], function (){
    gulp.watch('page/*.html', browserSync.reload);
    gulp.watch('page/css/*.css', browserSync.reload);
});
