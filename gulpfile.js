import { src, dest, watch, series, parallel } from 'gulp';
import Compiler from 'sass';
import gulpSass from 'gulp-sass';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import cleanCSS from 'gulp-clean-css';
import { deleteAsync } from 'del';
import browserSync from 'browser-sync';
import webpack from 'webpack-stream';
import webpackConfig from './webpack.config.js';

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
  },
  icons: {
    src: 'src/**/*.svg',
    dest: 'build/'
  },
  fonts: {
    src: ['src/**/*.eot', 'src/**/*.ttf', 'src/**/*.woff', 'src/**/*.woff2'],
    dest: 'build/'
  },
  img: {
    src: 'src/**/*.jpg',
    dest: 'build/'
  }
};

const clean = () => deleteAsync([paths.pages.dest]);

const styles = () => src(paths.styles.src)
  .pipe(sass({ sourceMap: false }))
  // .pipe(cleanCSS())
  .pipe(dest(paths.styles.dest))
  .pipe(browserSync.stream());

const scripts = () => src(paths.scripts.src)
  .pipe(webpack({
    config: webpackConfig
  }))
  .pipe(dest(paths.scripts.dest))
  .pipe(browserSync.stream());

const icons = () => src(paths.icons.src)
  .pipe(dest(paths.icons.dest));

const watchFiles = () => {
  watch(paths.scripts.src, scripts);
  watch(paths.styles.src, styles);
  watch(paths.pages.src, pages);
  watch(paths.icons.src, icons);
  watch(paths.fonts.src, fonts);
  watch(paths.img.src, img);
};

const pages = () => src(paths.pages.src)
  .pipe(dest(paths.pages.dest))
  .pipe(browserSync.stream());

const fonts = () => src(paths.fonts.src, { encoding: false })
  .pipe(dest(paths.fonts.dest))
  .pipe(browserSync.stream());

const img = () => src(paths.img.src, { encoding: false })
  .pipe(dest(paths.img.dest))
  .pipe(browserSync.stream());

const build = series(
  clean,
  parallel(styles, scripts, pages, icons, fonts, img)
);

const server = () => {
  browserSync.init({
    server: {
      baseDir: paths.pages.dest
    }
  });

  watchFiles();
};

const dev = series(build, server);

export {
  styles,
  scripts,
  watchFiles as watch,
  dev
};

export default build;
