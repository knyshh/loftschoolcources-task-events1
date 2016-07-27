var gulp = require('gulp');
var browserify = require('gulp-browserify');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('src/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('scripts', function() {

    gulp.src('src/js/app.js')
        .pipe(browserify({
            //insertGlobals : true,
            //debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./public/js'));
});

gulp.task('watch', ['scripts'], function () {
    gulp.watch('./src/js/**/*.js', ['scripts']);
});


gulp.task('default', ['scripts','sass',]);