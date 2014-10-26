var gulp = require('gulp'),
fs = require('fs'),
concat   = require('gulp-concat'),
uglify   = require('gulp-uglify'),
watch    = require('gulp-watch'),
less     = require('gulp-less'),
jade     = require('gulp-jade'),
imagemin = require('gulp-imagemin'),
pngcrush = require('imagemin-pngcrush');

gulp.task('images', function () {
  return gulp.src('assets/images/*')
      .pipe(imagemin({
          progressive: true,
          svgoPlugins: [{removeViewBox: false}],
          use: [pngcrush()]
      }))
      .pipe(gulp.dest('./dist/images'));
});

gulp.task('jade', function() {
  // var datas = fs.readFileSync('data.json');
  // var locals: {
  //   locals: JSON.parse(datas)
  // };

  return gulp.src('templates/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./dist'));
});

gulp.task('less', function () {
  return gulp.src('assets/stylesheets/styles.less')
    .pipe(less())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./dist/css'));
})


gulp.task('watch', function() {
  gulp.watch('app/templates/**/*.jade', ['jade']);
  gulp.watch('app/stylesheets/**/*.less', ['less']);
});
