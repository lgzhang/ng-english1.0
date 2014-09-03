'use strict';
// generated on 2014-08-23 using generator-gulp-app 0.1.0
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var serverPort = 8888;
var livereloadPort = 35799;
var defaultTask = ['connectServer', 'broswer', 'liveServer', 'watch'];

gulp.task('connectServer', $.serve({
    root: 'app',
    port: serverPort,
    middleware: require('connect-livereload')({port: livereloadPort})
}));

gulp.task("broswer", ['connectServer'], function(){
    gulp.src("app/index.html")
    .pipe($.open("", {url: "http://localhost:" + serverPort}));
});

gulp.task('liveServer', function() {
    $.livereload.listen(livereloadPort);
});

gulp.task('watch', function() {
    $.watch({glob: ['app/views/**/*.html','app/*.html', 'app/css/*.css', 'app/js/**/*', 'app/images/**/*']}, function() {
        $.livereload.changed("file", livereloadPort);
    });
});

gulp.task('default', defaultTask);