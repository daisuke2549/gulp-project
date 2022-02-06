let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename   = require("gulp-rename");
let uglify = require('gulp-uglify');

gulp.task('default', function() {
	console.log('test_implementation');
});

gulp.task('mincss', function() {
	return gulp.src("css/*.css")
		.pipe(cleanCSS())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('css/'));
});



gulp.task('minjs', function() {
	return gulp.src("js/*.js")
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('js/'));
});
