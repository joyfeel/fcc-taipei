const jspm = require('jspm');
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

// JSPM-cli api [https://github.com/jspm/jspm-cli/blob/master/docs/api.md]

const PATH = {
	scripts: 'public/javascripts/**',
	scssScripts: 'public/stylesheets/**/*.scss',
  	jsSrc: 'public/javascripts/main',
  	jsDest: 'public/dest/bundle.js',
  	scss: 'public/stylesheets/main.scss',
  	cssDest: 'public/dest/'
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
			//console.log('Finished')
		});
});

gulp.task('watch', () => {
	gulp.watch([PATH.scripts], ['scripts']).on('change', (event) => {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  		return;
	});

	gulp.watch([PATH.scssScripts], ['sass']).on('change', (event) => {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  		return;
	});
});

gulp.task('sass', () => {
	return gulp.src(PATH.scss)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		//.pipe(sass())
		.pipe(gulp.dest(PATH.cssDest));
});

gulp.task('default', ['watch', 'scripts', 'sass']);