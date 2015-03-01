var gulp = require('gulp'),
    watch = require('gulp-watch');
var concat = require('gulp-concat');
var watchLess = require('gulp-watch-less');
var less = require('gulp-less');

var paths = {
    scripts: ['app/js/**/*.js'],
    styles: ['app/css/style.less']
};

gulp.task('scripts', function() {
    // concat and copy all JavaScript
    return gulp.src(paths.scripts)
        //.pipe(watch(paths.scripts))
        .pipe(concat('profile_blog.js'))
        .pipe(gulp.dest('app/dist/js'));
});

gulp.task('styles', function() {
	return gulp.src(paths.styles)
        //.pipe(watchLess(paths.styles))
        .pipe(less())
		.pipe(gulp.dest('app/dist/css'));
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts', 'styles']);
