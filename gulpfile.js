'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify');

gulp.task('styles', function() {
    gulp.src('app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css/'))
        .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('styles:watch', function () {
  gulp.watch('app/sass/**/*.scss', ['styles']);
});


gulp.task('default', ['styles'], function() {
    gulp.start('styles');
    gulp.start('styles:watch');
});