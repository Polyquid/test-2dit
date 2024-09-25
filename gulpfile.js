import { src, dest, watch, series, parallel } from 'gulp';
import Compiler from 'sass';
import gulpSass from 'gulp-sass';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import cleanCSS from 'gulp-clean-css';
import { deleteAsync } from 'del';
import browserSync from 'browser-sync';

const sass = gulpSass(Compiler);

const paths = {
  styles: {
    src: 'src/**/*.scss',
    dest: 'build/'
  },
  scripts: {
    src: 'src/**/*.js',
    dest: 'build/'
  },
  pages: {
    src: 'index.html',
    dest: 'build/'
  }
};

const clean = () => deleteAsync([paths.pages.dest]);

const styles = () => src(paths.styles.src).
  pipe(sass({ sourceMap: false })).
  pipe(cleanCSS()).
  pipe(dest(paths.styles.dest)).
  pipe(browserSync.stream());

const scripts = () => src(paths.scripts.src).
  pipe(babel()).
  pipe(uglify()).
  pipe(dest(paths.scripts.dest)).
  pipe(browserSync.stream());

const watchFiles = () => {

  watch(paths.scripts.src, scripts);
  watch(paths.styles.src, styles);

};

const html = () => src(paths.pages.src).
  pipe(dest(paths.pages.dest)).
  pipe(browserSync.stream());

const build = series(
  clean,
  parallel(styles, scripts, html)
);

const server = () => {

  browserSync.init({
    server: {
      baseDir: paths.pages.dest
    }
  });

  watch(paths.styles.src, styles);
  watch(paths.pages.src, html);
  watch(paths.scripts.src, scripts);

};

const dev = series(build, server);

export {
  styles,
  scripts,
  watchFiles as watch,
  dev
};

export default build;
