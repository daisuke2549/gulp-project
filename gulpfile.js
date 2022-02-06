let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
var rename   = require("gulp-rename");

gulp.task('default', function() {
	console.log('test_implementation');
});

gulp.task('mincss', function() {
	return gulp.src("css/*.css")
		.pipe(cleanCSS())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('css/'));
});
