const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
 
gulp.task('images', () =>
    gulp.src('./public/images/qu-est-ce-qu-un-tech-marketer/*')
        .pipe(imagemin({
            progressive: true,
            optimizationLevel: 5,
        }))
        .pipe(gulp.dest('./public/images/qu-est-ce-qu-un-tech-marketer'))
);
