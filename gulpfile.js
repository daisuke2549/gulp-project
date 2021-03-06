let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename   = require("gulp-rename");
let uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));

gulp.task('default', function() {
	console.log('gulp環境のテストです。');
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

gulp.task('sass', function() {
	return gulp.src('./sass/*.scss')
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(gulp.dest('./'));
});
