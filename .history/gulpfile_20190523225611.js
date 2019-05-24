var gulp = require('gulp'),

sass = require('gulp-sass');
gulp.task('sass_task', function () {
gulp.src('app/**/*.sass')

.pipe( sass({outputStyle: 'compressed'}) )
.pipe(gulp.dest('dist/css'));

});