var gulp = require('gulp');
var bower = require('gulp-bower');
var uglify = require('gulp-uglify');
var pump = require('pump');
var connect = require('gulp-connect');

gulp.task('default', ['build']);
gulp.task('build', ['copy', 'js', 'bower']);

gulp.task('copy', function() {
    gulp.src(['**/*.html', '**/*.png', '**/*.jpg', '**/*.svg', 'samples/**/*', '!dist/**/*', '!node_modules/**/*', '!lib/**/*'])
        .pipe(gulp.dest('dist'));
    gulp.src(['samples/**/*'])
        .pipe(gulp.dest('dist/samples'));
    gulp.src(['css/**/*.css'])
        .pipe(gulp.dest('dist/css'));
    gulp.src(['fonts/**/*'])
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('js', function (cb) {
  pump([
        gulp.src('js/**/*.js'),
        uglify(),
        gulp.dest('dist/js')
    ],
    cb
  );
});

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('dist/lib'))
});

gulp.task('serve', function() {
  connect.server({
    port: 8080
  });
});
