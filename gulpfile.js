const gulp = require('gulp'),
    jasmine = require('gulp-jasmine'),
    protractor = require('gulp-protractor').protractor,
    webdriver_standalone = require('gulp-protractor').webdriver_standalone;

// gulp.task('webdriver_standalone', webdriver_standalone);

gulp.task('jasmine', async () => {
   gulp.src('testsJs/tests/*.js')
       .pipe(jasmine())
       .on('error', (e) => {
           console.log(e.stack);
       });
});

gulp.task('protractor', async () => {
   gulp.src(['testsJs/tests/*.js'])
       .pipe(protractor({
           'configFile': 'conf.js',
           args: [
               // '--baseUrl', 'http://127.0.0.1:8000',
               '--suite', 'login'
           ]
       }))
       .on('error', (e) => {
          console.log(e);
       })
});

gulp.task('default', gulp.series('jasmine', 'protractor'));
