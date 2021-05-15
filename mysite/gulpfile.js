//src -> dist

var gulp = require('gulp');

// gulp.src('./src/index.html')

gulp.task('html', function() {
    return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'))
});


gulp.task('msg',['html'], function() {
   console.log("html copy done!");
});


gulp.task('default', ['msg']);