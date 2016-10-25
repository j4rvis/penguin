module.exports = function (grunt) {
    grunt.initConfig({
        paths: {
            scss: './assets/scss',
            css: './assets/css'
        },

        sass: {
            admin: {
                options : {
                    // Only enable sourcemaps if you have Sass 3.3 installed.
                    // sourcemap: true
                },
                files: {
                    '<%= paths.css %>/styles.css': '<%= paths.scss %>/styles.scss'
                }
            }
        },

        watch: {
            sass: {
                files: '<%= paths.scss %>/*.scss',
                tasks: ['sass:admin']
            }
        }
    });


    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass:admin']);
};
