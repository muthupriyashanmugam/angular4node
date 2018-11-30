
(function () {
    'use strict';
  
    var _ = require('lodash'),
      del = require('del'),
      gulp = require('gulp'),
      sourcemaps = require('gulp-sourcemaps'),
      gulpLoadPlugins = require('gulp-load-plugins'),
      runSequence = require('run-sequence'),
      plugins = gulpLoadPlugins();
      var ts = require('gulp-typescript');

  
    // clean the contents of the distribution directory
    gulp.task('clean', function () {
      return del(['public/dist/**/*']);
    });

    //Gulp Jade compile
    gulp.task('templates', function () { 
    gulp.src(['/public/**/*.html'])
        .pipe(plugins.plumber())
        .pipe(gulp.dest('public/dist/build/'));
    });
  
  
  
    gulp.task('tscompile:dev', function () {
      var tsFiles = plugins.typescript.createProject({
        declaration: true
      });
      var devTsAssets = [];
      _(['typings/browser.d.ts',
        'public/**/*.ts']).forEach(function (n) {
        devTsAssets.push(n);
      });
      return gulp
        .src(devTsAssets)
        .pipe(plugins.plumber())
        .pipe(sourcemaps.init())
        .pipe(plugins.typescript(tsFiles))
        .pipe(sourcemaps.write('.'))
        .pipe(plugins.template())
        .pipe(gulp.dest('public/dist/build/'));
    });
  

    gulp.task('build', function (done) {
      runSequence('clean', 'templates', 'tscompile:dev',done);
    });
  
  }());