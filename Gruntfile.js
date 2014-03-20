module.exports = function(grunt) {

    grunt.initConfig({

        jshint: {
            options: {
                strict: true,
                forin: true,
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                undef: true,
                unused: true,
                eqnull: true,
                indent: 4,
                browser: true,
                onevar: true,
                globals: {
                    jQuery: true,
                    $: true,
                    module: true,
                    WOW: true
                }
            },
            grunt: {
                options: {
                    strict: false
                },
                src: 'Gruntfile.js'
            },
            site: {
                src: [
                    'js/**/*.js',
                    '!js//**/*.min.js',
                    '!js/vendor/**/*.js'
                ]
            }
        },

        concat: {
            options: {
                stripBanners: true,
                separator: ';'
            },
            dist: {
                src: [
                    'js/vendor/jquery.fs.wallpaper.min.js',
                    'js/vendor/owl.carousel.min.js',
                    'js/vendor/retina-1.1.0.min.js',
                    'js/vendor/wow.min.js',
                    'js/vendor/jquery.viewport.js',
                    'js/vendor/jquery.easypiechart.min.js',
                    'js/main.js'
                ],
                dest: 'js/main.min.js'
            }
        },

        uglify: {
            my_target: {
                files: {
                    'js/main.min.js': 'js/main.min.js'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};