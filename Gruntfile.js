module.exports = function (grunt) {
    grunt.initConfig({
      autoprefixer: {
        dist: {
          files: {
            'splash-style.css': 'splash-style-dev.css'
          }
        }
      },
      watch: {
        styles: {
          files: ['splash-style-dev.css'],
          tasks: ['autoprefixer']
        }
      }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
