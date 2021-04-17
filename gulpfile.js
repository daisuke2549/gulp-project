const gulp = require("gulp");

const sass = require("gulp-sass");


gulp.task("default", function(){
    return(
        gulp
        .src("css/style.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"))
    );
});


const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
 
gulp.task('default2', function () {
    gulp.src('src/**/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});