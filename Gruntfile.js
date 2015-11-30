module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-shopify-sass');

  grunt.initConfig({
    shopify_sass: {
          theme: {
              src: 'styles/theme.scss',
              dest: 'assets/theme.scss.liquid'
          }
      },
  });




  // Default task(s).
  grunt.registerTask('default', ['shopify_sass']);

};
