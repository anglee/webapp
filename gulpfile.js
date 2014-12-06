var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('default', function(){
  console.log("Hello, gulp!");
});

gulp.task('hello', function () {
  console.log("Hello");
});

gulp.task('dev', function() {
  nodemon({script: 'app.js'});
});