module.exports = function(grunt) {
  grunt.initConfig({
    coffee: {
      all: {
        src: ['src/coffee/*.coffee'],
        dest: 'tmp/js/',
      }
    },
    less: {
      all: {
        src: 'src/less/all.less',
        dest: 'tmp/css/all.css',
        options: {
          compress: true
        }
      }
    },
    concat: {
      scripts: {
        src: [
          'vendor/google-code-prettify/prettify.js',
          'tmp/js/*.js'
        ],
        dest: 'assets/js/all.js'
      },
      styles: {
        src: ['tmp/css/*'],
        dest: 'assets/css/all.css'
      }
    },
    min: {
      script: {
        src: ['assets/js/all.js'],
        dest: 'assets/js/all.min.js'
      }
    },
    watch: {
      files: ['src/**/*'],
      tasks: 'default'
    }
  });

  // load npm tasks
  grunt.loadNpmTasks('grunt-coffee');
  grunt.loadNpmTasks('grunt-less');

  // default task
  grunt.registerTask('default', 'less coffee concat min');
};
