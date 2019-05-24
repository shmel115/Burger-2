var gulp = require('gulp'),

sass = require('gulp-sass');
sass.compiler=require('node-sass')
gulp.task('sass_task', function () {
gulp.src('css/styles.scss')


.pipe(gulp.dest('css'));

});