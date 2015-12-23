module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-shopify');
    grunt.loadNpmTasks('grunt-shopify-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
      shopify_sass: {
            theme: {
                src: 'styles/theme.scss',
                dest: 'assets/theme.scss.liquid'
            }
      },
      shopify: {
          options: {
            api_key: "694800fb550bc85c81a38e35ff166cb5",
            password: "8b9961913ed70ff36af39ced770dbb4e",
            url: "v-for-vape.myshopify.com",
          }
        },
        watch: {
            shopify_sass: {
                files: ['styles/*'],
                tasks: ['shopify_sass']
            },
            shopify: {
                files: ['assets/*.*', 'themes/*.*', 'snippets/*.*', 'config/*.*', 'layout/*.*', 'locale/*.*', 'spec/*.*', 'templates/*.*', 'templates/customers/*.*'],
                tasks: ['shopify'],
                events: true,
                spawn: true
            },
        }
    });

    grunt.registerTask('default', ['watch']);
};
