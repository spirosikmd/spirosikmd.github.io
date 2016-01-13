var gulp = require('gulp');
var concat = require('gulp-concat');

var vendor = [
  'node_modules/angular2/bundles/angular2-polyfills.js',
  'node_modules/systemjs/dist/system.src.js',
  'node_modules/rxjs/bundles/Rx.js',
  'node_modules/angular2/bundles/angular2.dev.js'
];

gulp.task('vendor', function () {
  return gulp.src(vendor)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./app'));
});
