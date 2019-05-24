var gulp = require('gulp');
var concat = require(‘gulp-concat’);
.pipe(concat(‘all.js’))
var sass = require('gulp-sass');
sass.compiler=require('node-sass')
gulp.task('sass_task', function (done) {
gulp.src('css/styles.scss')
.pipe(sass().on('error', sass.logError))
.pipe(gulp.dest('css'));
done();
});