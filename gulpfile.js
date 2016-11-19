var gulp = require('gulp');
var babel = require('gulp-babel');
var watch = require('gulp-watch');
var batch = require('gulp-batch');

gulp.task('default', function () {
    gulp.start('build');
});

gulp.task('build', function() {
    return gulp.src(['src/*.js', 'src/**/*.js'])
            .pipe(babel())
            .pipe(gulp.dest('build'));
});

gulp.task('watch', function () {
    watch('src/**/*', batch(function (events, done) {
        gulp.start('build', done);
    }));
});
