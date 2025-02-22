// Получаем имя папки проэкта
import { watch } from 'fs';
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

// Подключение папок
const buildFolder = `./dist`; // Название выходного проэкта
const srcFolder = `./src`; // Название входного проэкта

// Пути
export const path = {
   build: {
      js: `${buildFolder}/js/`,
      css: `${buildFolder}/css/`,
      html: `${buildFolder}/`,
      images: `${buildFolder}/img/`,
      fonts: `${buildFolder}/fonts/`,
      files: `${buildFolder}/files/`,
   },
   src: {
      js: `${srcFolder}/js/*.js`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
      svg: `${srcFolder}/img/**/*.svg`,
      scss: `${srcFolder}/scss/**/*.scss`,
      html: `${srcFolder}/html/**/*.html`, //.pug
      files: `${srcFolder}/files/**/*.*`,
      svgicons: `${srcFolder}/svgicons/*.svg`,
   },
   watch: {
      js: `${srcFolder}/js/*.js`,
      scss: `${srcFolder}/scss/**/*.scss`,
      html: `${srcFolder}/**/**/*.html`, //.pug
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
      files: `${srcFolder}/files/**/*.*`,
   },
   clean: buildFolder,
   buildFolder: buildFolder,
   srcFolder: srcFolder,
   rootFolder: rootFolder,
   ftp: `project`
}