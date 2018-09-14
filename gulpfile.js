const gulp      = require("gulp");
const concat    = require("gulp-concat");
const cleanCSS  = require("gulp-clean-css");
const imagemin  = require("gulp-imagemin");
const uglify    = require("gulp-uglify");
const watch     = require("gulp-watch");

// Flytta html-filer från src till pub
gulp.task("copyhtml", function() {
    return gulp.src("src/*.html")   // hämta html-filer från källmapp (src)
        .pipe(gulp.dest("pub/"));   // lägga filer i destinationsmapp (pub/)
});

// minifiera och flytta CSS-filer från src till pub
gulp.task("minconcatCSS", function() {
    return gulp.src("src/css/*.css")    // hämta CSS-filer från källmapp (src/css)
        .pipe(concat("main.min.css"))   // sammanslår alla CSS-filer till en CSS-fil
        .pipe(cleanCSS())
        .pipe(gulp.dest("pub/css"));    // lägger filer i destinationsmapp (pub/css)
});

// minifiera och sammanslå javascript, flytta från src till pub
gulp.task("minconcatjs", function() {
    return gulp.src("src/js/*.js")
        .pipe(concat("main.min.js"))    // sammanslår alla js-filer till en js-fil
        .pipe(uglify())
        .pipe(gulp.dest("pub/js"));     // lägger filer i destinationsmapp (pub/js)
})

// minifiera och flytta bilder från src till pub
gulp.task("minimages", function() {
    return gulp.src("src/images/*")     // hämta bilder från källmapp (pub/images)
        .pipe(imagemin())               // minifiera
        .pipe(gulp.dest("pub/images")); // lägg bilder i destinationsmapp (pub/images)
})


// watchers
gulp.task("watcher", function() {

    watch("src/*.html", function() {    // html-filer
        gulp.start("copyhtml");
    });

    watch("src/css/*.css", function() { // css-filer
        gulp.start("minconcatCSS");
    });

    watch("src/js/*.js", function() {
        gulp.start("minconcatjs");      // js-filer
    })

    watch("src/images", function() {
        gulp.start("minimages");        // bilder
    })

});

gulp.task("default", ["copyhtml", "minconcatCSS", "minconcatjs", "minimages", "watcher"]);