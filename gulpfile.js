var gulp = require('gulp'),
    livereload = require('gulp-livereload');


gulp.task('default', function() {
    // place code for your default task here
});

gulp.task('watch', function() {
    livereload.listen();

    // Watch any files in dist/, reload on change
    gulp.watch(['dist/**']).on('change', livereload.changed);

    //gulp.watch('less/*.less', ['less']);
});

