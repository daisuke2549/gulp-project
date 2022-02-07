let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename   = require("gulp-rename");
let uglify = require('gulp-uglify');

const imagemin = require("gulp-imagemin");
const pngquant = require("imagemin-pngquant");

function minifyImage() {
  return (
    gulp
      // 圧縮前の画像を入れるフォルダを指定
      .src("./base/img/*.{png,jpg,jpeg,gif,svg}")
      // 圧縮率などを設定
      .pipe(
        imagemin([
          imagemin.mozjpeg({ quality: 80 }),
          imagemin.svgo({
            plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
          }),
          imagemin.gifsicle({
            interlaced: true,
          }),
          pngquant({
            quality: [0.65, 0.8],
            speed: 1,
          }),
        ])
      )
      // 圧縮後の画像を出力するフルダを指定
      .pipe(gulp.dest("./base/"))
  );
}

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
