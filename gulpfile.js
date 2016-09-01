var gulp = require('gulp');
var concat = require('gulp-concat');

var vendor = [
  'node_modules/core-js/client/shim.min.js',
  'node_modules/zone.js/dist/zone.min.js',
  'node_modules/reflect-metadata/Reflect.js',
  'node_modules/systemjs/dist/system.src.js'
];

gulp.task('vendor', function () {
  return gulp.src(vendor)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./app'));
});
