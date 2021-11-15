module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    combine: {
      single: {
        input: "./index.html",
        output: "./dist/index.html",
        tokens: [
          {
            token: "//cryptojs.js",
            file: "./node_modules/crypto-js/crypto-js.js",
          },
        ],
      },
    },
  });

  grunt.loadNpmTasks("grunt-combine");

  // Default task(s).
  grunt.registerTask("default", ["combine"]);
};
