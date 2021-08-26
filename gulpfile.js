const gulp = require("gulp");

gulp.task("default", async function(){
    return gulp.src("src/*").pipe(gulp.dest("dist"))
})