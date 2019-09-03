const webpackConfig = require('./webpack.config');

module.exports = function(grunt) {

	grunt.initConfig({
		
		copy: {
		  main: {
			files: [
			  // includes files within path
			  {
				  expand: true, 
				  flatten: true, 
				  src: ['./dev/components/*.html'], 
				  dest: './dist/insights/res/components/', 
				  filter: 'isFile'
			  }
			]
		  },
		},
		
		
		webpack: {
			options: {
				watch: false
			},
			prod: webpackConfig,
			dev: webpackConfig
		},
		
		
		watch: {
		  scripts: {
			files: ['./dev/**/*.*' ],
			tasks: ['webpack', 'copy', 'accessibility'],
			options: {
			  spawn: false,
			},
		  },
		},
		
		accessibility: {
		  options: {
			accessibilityLevel: 'WCAG2A',
			  errorLevels: {
				  notice: false,
				  warning: true,
				  error: true
				},
				reportLevels: {
				  notice: false,
				  warning: true,
				  error: true
				}
		  },
		  test: {
			options: {
				 
			},
			src: ['dist/insights/index.html']
		  }
		}
		
	});

	grunt.loadNpmTasks('grunt-accessibility-ext');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-webpack');
	grunt.registerTask('default', ['webpack', 'copy', 'watch']);

	grunt.registerTask('validate', ['webpack', 'copy', 'accessibility'])
};