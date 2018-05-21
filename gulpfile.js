var gulp = require("gulp");
var webserver = require("gulp-webserver");
gulp.task("server", function() {
    gulp.src("./src")
        .pipe(webserver({
            port: 8080,
            host: "localhost",
            livereload: true,
            open: true,
            middleware: function(req, res, next) {
                next()
            }
        }))
})
gulp.task("default", ["server"])