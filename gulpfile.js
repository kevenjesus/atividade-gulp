var gulp 		= require("gulp");
var sass 		= require("gulp-sass");
var htmlmin = require("gulp-htmlmin");
var del 		= require("del");

/*
  Apaga os arquivos css
*/

gulp.task("clean:css", function(){
	return del("dist/css");
});

/*
  Apaga o arquivo html
*/

gulp.task("clean:html", function(){
	return del("dist/*.html");
});


/*
  transforma o sass em css
*/

gulp.task("sass", ['clean:css'], function(){
	return gulp.src("./source/scss/*.scss")
				.pipe(sass({outputStyle: "compressed"}))
				.pipe(gulp.dest("dist/css"));
});


/*
  minifica o html
*/

gulp.task("html", ['clean:html'], function(){
	return gulp.src("./source/*.html")
				.pipe(htmlmin({collapseWhitespace:true}))
				.pipe(gulp.dest("dist"))
});

/*
  escuta os arquivos sass e html
*/

gulp.task("watch", function(){
	gulp.watch("./source/**/*.scss", ['sass']);
	gulp.watch("./source/*.html", ['html']);
});