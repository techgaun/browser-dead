var gulp = require('gulp')
var cleanCSS = require('gulp-clean-css')
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')
var del = require('del')
var concat = require('gulp-concat')
var size = require('gulp-size')
var connect = require('gulp-connect')
var runSequence = require('run-sequence')

var config = {
  src: 'src',
  dist: 'dist',
}

gulp.task('styles', () => {
  gulp.src(`${config.src}/css/browser-dead.css`)
    .pipe(concat('browser-dead.css'))
    .pipe(gulp.dest(`${config.dist}/css`))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(cleanCSS({ compatibility: 'ie7' }))
    .pipe(gulp.dest(`${config.dist}/css`))
    .pipe(size())
})

gulp.task('scripts', () => {
  gulp.src(`${config.src}/browser-dead.js`)
    .pipe(concat('browser-dead.js'))
    .pipe(gulp.dest(`${config.dist}/`))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(gulp.dest(`${config.dist}/`))
    .pipe(size())
})

gulp.task('clean', () => {
  del.sync([
    config.dist
  ])
})

gulp.task('build', (done) => {
  runSequence(
    'clean',
    'styles',
    'scripts',
    () => {
      done()
    }
  )
})

gulp.task('serve', ['build'], () => {
  connect.server({
    root: 'src',
    port: 3000,
    livereload: true
  })
  gulp.watch('src/css/browser-dead.css', ['styles'])
  gulp.watch('src/browser-dead.js', ['scripts'])
})

// Default task
gulp.task('default', ['serve'])
