'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('jshint', function() {
	return gulp.src(['tcp_server_example.js', 'gulpfile.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('default', ['jshint']);