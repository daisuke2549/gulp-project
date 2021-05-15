//src -> dist

var gulp = require('gulp');
let imagemin = require('gulp-imagemin');


// gulp.src('./src/index.html')

gulp.task('html', function() {
    return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'))
});

gulp.task('img', function() {
    gulp.src('./src/img/*.jpg')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
});


gulp.task('default', ['html', 'img']);