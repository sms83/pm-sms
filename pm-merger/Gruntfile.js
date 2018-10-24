// Gruntfile.js
module.exports = function(grunt) {

    grunt.initConfig({
  
      // configure nodemon
      shell: {  
        command: [
            "npm i",
            "npm update -g npm",
            "npm install cors",
			"npm install express",
            "npm install mongoose",
			"npm install body-parser",
            "npm install -g grunt-cli",
            "npm install grunt --save-dev",
            "npm install grunt-nodemon"
            ].join('&&')  
        } ,
    nodemon: {
        dev: {
          script: 'server.js'
        }
      }
  
    });
  
    // load nodemon
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-nodemon');

    // register the nodemon task when we run grunt
    grunt.registerTask('default', ['shell','nodemon']);  
  
  };