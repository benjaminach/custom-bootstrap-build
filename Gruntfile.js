/* jshint node: true */

module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		datetime: Date.now(),

		clean: {
			dist: ['dist/*'],
			tmp: ['dist/tmp'],
			styleguideassets: ['style-guide/fonts/**', 'style-guide/css/**', 'style-guide/images/**', 'style-guide/js/**']
		},

		concat: {
			'options': {
				nonull: true,
			},
			'bootstrap-js': {
				src: [
					'bower_components/bootstrap/js/transition.js',
					'bower_components/bootstrap/js/alert.js',
					'bower_components/bootstrap/js/button.js',
					'bower_components/bootstrap/js/carousel.js',
					'bower_components/bootstrap/js/collapse.js',
					'bower_components/bootstrap/js/dropdown.js',
					'bower_components/bootstrap/js/modal.js',
					'bower_components/bootstrap/js/tooltip.js',
					'bower_components/bootstrap/js/popover.js',
					'bower_components/bootstrap/js/scrollspy.js',
					'bower_components/bootstrap/js/tab.js',
					'bower_components/bootstrap/js/affix.js'
				],
				dest: 'dist/tmp/js/bootstrap.js'
			},
			'libs-js': {
				src: [
					'bower_components/respond/dest/respond.src.js',
					'bower_components/jquery/jquery.js',
					'dist/tmp/js/modernizr-custom.js',
					'bower_components/html5shiv/dist/html5shiv-printshiv.js',
					'bower_components/parsleyjs/i18n/messages.fr.js',
					'bower_components/parsleyjs/dist/parsley.min.js',
					'js/config.parsley.js'
				],
				dest: 'dist/tmp/js/libs.js'
			},
			'app-js': {
				src: [
					'dist/tmp/js/libs.js',
					'dist/tmp/js/bootstrap.js'
				],
				dest: 'dist/js/app.js'
			}
		},

		uglify: {
			'options': {
				report: 'min',
				mangle: {
					toplevel: true
				},
				squeeze: {
					dead_code: false
				},
				codegen: {
					quote_keys: true
				}
			},
			'app-js': {
				src: 'dist/js/app.js',
				dest: 'dist/js/app.min.js'
			}
		},

		less: {
			development: {
				options: {
					sourceMap: true,
					outputSourceFiles: true,
					sourceMapURL: 'app.css.map',
					sourceMapFilename: 'dist/css/app.css.map',
				},
				files: {
					'dist/css/app.css': 'less/custom-bootstrap-build.less'
				}
			},
			production: {
				options: {
					cleancss: true,
					compress: true,
					report: 'min',
					ieCompat: 'true',
				},
				files: {
					'dist/css/app.min.css': 'less/custom-bootstrap-build.less'
				}
			}
		},

		copy: {
			fonts: {
				cwd: 'fonts/',
				src: ['**'],
				dest: 'dist/fonts',
				expand: true
			},
			bootstrapfonts: {
				cwd: 'bower_components/bootstrap/dist/fonts/',
				src: '**',
				dest: 'dist/fonts',
				expand: true
			},
			styleguideassets: {
				cwd: 'dist/',
				src: ['fonts/**', 'css/**', 'images/**', 'js/**'],
				dest: 'style-guide',
				expand: true
			}
		},

		modernizr: {

			dist: {
				// [REQUIRED] Path to the build you're using for development.
				'devFile': 'bower_components/modernizr/modernizr.js',
				// [REQUIRED] Path to save out the built file.
				'outputFile': 'dist/tmp/js/modernizr-custom.js',
				// Based on default settings on http://modernizr.com/download/
				'extra': {
					'shiv': true,
					'printshiv': true,
					'load': false,
					'mq': false,
					'cssclasses': true
				},

				// Based on default settings on http://modernizr.com/download/
				'extensibility': {
					'addtest': false,
					'prefixed': false,
					'teststyles': false,
					'testprops': false,
					'testallprops': false,
					'hasevents': false,
					'prefixes': false,
					'domprefixes': false
				},

				// By default, source is uglified before saving
				'uglify': false,
				'tests': [],
				'parseFiles': false,
				'matchCommunityTests': false,
				'customTests': []
			}

		},

		validation: {
			options: {
				reset: true,
				path: 'dist/report/validation-status.json',
				reportpath: 'dist/report/validation-report.json',
				relaxerror: [
					'Bad value X-UA-Compatible for attribute http-equiv on element meta.',
					'Element img is missing required attribute src.'
				]
			},
			files: {
				src: ['dist/style-guide/index.html']
			}
		},

		csslint: {
			strict: {
				options: {
					csslintrc: 'less/.csslintrc'
				},
				src: ['dist/css/app.css']
			}
		},

		watch: {
			less: {
				files: 'less/*.less',
				tasks: ['less:development', 'less:production', 'copy:styleguideassets']
			},
			images: {
				files: ['images/*.png', 'images/*.jpg', 'images/*.gif'],
				tasks: ['imagemin', 'copy:styleguideassets']
			}
		},

		imagemin: {
			dynamic: {
				options: {
					pngquant: true,
					cache: false
				},
				files: [{
					cwd: 'images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'dist/images',
					expand: true
				}]
			}
		},

		// Local server with live-reload
		connect: {
			iserver: {
				options: {
					port: 9001,
					base: 'style-guide',
					keepalive: true
				}
			},
			docserver: {
				options: {
					port: 9002,
					base: 'style-guide'
				}
			}
		},

		jshint: {
			options: {
				jshintrc: 'js/.jshintrc'
			},
			gruntfile: {
				src: 'Gruntfile.js'
			},
			src: {
				src: ['js/*.js']
			}
		},

		jsbeautifier: {
			modify: {
				src: ['Gruntfile.js'],
				options: {
					config: 'js/.jsbeautifyrc'
				}
			},
			verify: {
				src: ['Gruntfile.js'],
				options: {
					mode: 'VERIFY_ONLY',
					config: 'js/.jsbeautifyrc'
				}
			}
		},

		phantomas: {
			styleguide: {
				options: {
					indexPath: './phantomas/',
					url: 'http://localhost:9002/',
					'timeout': 60,
					'analyze-css': true
				}
			}
		}
		//fin
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-modernizr');
	grunt.loadNpmTasks('grunt-html-validation');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jsbeautifier');
	grunt.loadNpmTasks('grunt-phantomas');

	grunt.registerTask('default', [
		'clean:dist',
		'clean:styleguideassets',
		'modernizr',
		'jshint',
		'concat:bootstrap-js',
		'concat:libs-js',
		'concat:app-js',
		'uglify:app-js',
		'less:development',
		'less:production',
		'imagemin',
		'copy:fonts',
		'copy:bootstrapfonts',
		'copy:styleguideassets',
		'clean:tmp'
	]);

	grunt.registerTask('test', ['default', 'jsbeautifier:verify', 'jshint', 'csslint']);
	grunt.registerTask('cleanjs', ['jsbeautifier:modify', 'jshint']);
	grunt.registerTask('perf', ['connect:docserver', 'phantomas']);

};
