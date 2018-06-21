const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const concatCss = require('gulp-concat-css');

gulp.task('sass', function ()  {
    gulp.src('assets/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css/'))
});

gulp.task('minify', function () {
    gulp.src('assets/js/main.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        //.pipe(uglify().on('error', uglify.logError))
        .pipe(gulp.dest('dist/js'));
});


gulp.task('cssminify', function () {
    gulp.src('assets/css/style.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('cssminify2', function () {
    gulp.src('assets/css/animation.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'));
});


gulp.task('image', function () {
    gulp.src('assets/image/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});


gulp.task('default', ['sass', 'minify', 'cssminify', 'image', 'cssminify2']);
