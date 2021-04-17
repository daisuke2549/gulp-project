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