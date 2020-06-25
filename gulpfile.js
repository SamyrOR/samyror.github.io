const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('compileCSS', () =>{
    return gulp.src('src/assets/css/style.css')
        .pipe(autoprefixer({
            cascade: false,
        }))
        .pipe(cleanCSS({debug: true}, (details) => {
            console.log(`${details.name} : ${details.stats.originalSize}`)
            console.log(`${details.name} : ${details.stats.minifiedSize}`)
        }))
    .pipe(gulp.dest('src/assets/css/dist'))
}) 

gulp.task('imagemin', () => {
    return gulp.src('src/assets/images/*')
    .pipe(imagemin({
        verbose: true
    }))
    .pipe(gulp.dest('src/assets/images'))
})
