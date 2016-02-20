
const jspm = require('jspm'),
	gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	colors = require('colors/safe'),
	changed = require('gulp-changed'),
	imagemin = require('gulp-imagemin'),
	cache = require('gulp-cache');

// JSPM-cli api [https://github.com/jspm/jspm-cli/blob/master/docs/api.md]

const PATH = {
	jsFiles: 'public/javascripts/**/*.js',
	scssFiles: 'public/stylesheets/**/*.scss',
  	jsSrc: 'public/javascripts/app',
  	jsDest: 'public/dest/bundle.js',
  	scssSrc: 'public/stylesheets/main.scss',
  	scssDest: 'public/dest/',
  	imageSrc: 'public/images/original/*',
  	imageDest: 'public/images/'
};

jspm.setPackagePath('.');

gulp.task('scripts', () => {
    return jspm
		.bundleSFX(PATH.jsSrc, PATH.jsDest, 
			{
				minify: false,
				mangle: false,
				lowResSourceMaps: false,
				sourceMaps: true
			})
		.then(() => {
		});
});

gulp.task('sass', () => {
	return gulp.src(PATH.scssSrc)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(PATH.scssDest));
});

gulp.task('images', () => {
  	return gulp.src(PATH.imageSrc)
        .pipe(cache(imagemin({optimizationLevel: 5})))
        .pipe(gulp.dest(PATH.imageDest));
});

gulp.task('watch', () => {
	gulp.watch(PATH.jsFiles, ['scripts']).on('change', (event) => {
		console.log(colors.cyan('File ' + event.path + ' was ' + event.type + ', running tasks...'));
  		return;
	});


	gulp.watch(PATH.scssFiles, ['sass']).on('change', (event) => {
		console.log(colors.magenta('File ' + event.path + ' was ' + event.type + ', running tasks...'));
  		return;
	});
});

gulp.task('default', ['watch', 'scripts', 'sass', 'images']);
//gulp.task('default', ['watch', 'sass', 'images']);