module.exports = function(grunt) {
  grunt.initConfig({
     pkg: grunt.file.readJSON('package.json'),
      connect: {
      server: {
        options: {
          port: 1337,
          base: '.',
          keepalive: true
        }
      }
    }
   });
  grunt.loadNpmTasks('grunt-contrib-connect');
}