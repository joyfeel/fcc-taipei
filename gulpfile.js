const jspm = require('jspm');
const gulp = require('gulp');

// JSPM-cli api [https://github.com/jspm/jspm-cli/blob/master/docs/api.md]

const paths = {
	scripts: 'public/javascripts/**',
  	main: 'public/javascripts/main',
  	dest: 'public/dest/bundle.js'
};

jspm.setPackagePath('.');

gulp.task('scripts', () => {
    return jspm
		.bundleSFX(paths.main, paths.dest, 
			{ 
				minify: false,
				mangl1qe: false,
				lowResSourceMaps: false,
				sourceMaps: true
			})
		.then(() => {
			//console.log('Finished')
		});
});

gulp.task('watch', () => {
	gulp.watch([paths.scripts], ['scripts']).on('change', (event) => {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  		return;
	});
});

gulp.task('default', ['watch', 'scripts']);