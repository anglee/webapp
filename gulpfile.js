var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    jasmine = require('gulp-jasmine');

gulp.task('default', function(){
  console.log("Hello, gulp!");
});

gulp.task('hello', function () {
  console.log("Hello");
});

gulp.task('watch', function() {
  nodemon({script: 'app.js'})
      .on('restart', function () {
        console.log('=========== restarted! ===========')
      });
});

gulp.task('test', function() {
  return gulp.src('spec/**/*-spec.js')
      .pipe(jasmine());
});
