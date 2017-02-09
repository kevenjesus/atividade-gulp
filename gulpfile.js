var gulp = require("gulp");
var del = require("del");
gulp.task('limpa',function(){
	del("dist/css")
})
gulp.task('move-css',function(){
	return gulp.src('./source/scss/style.scss')
			.pipe(gulp.dest('./dist/css'));
})
gulp.task('layout-css',function(){
	return gulp.src('./source/scss/layout.scss')
			.pipe(gulp.dest('./dist/css'));
})
gulp.task('base-css',function(){
	return gulp.src('./source/scss/base.scss')
			.pipe(gulp.dest('./dist/css'));
})
gulp.task('move-js',function(){
	return gulp.src('./source/js/style.js')
			.pipe(gulp.dest('./dist/js'));
})

gulp.task('view-css',function(){
	gulp.watch('./source/scss/style.scss',['move-css']);
	gulp.watch('./source/scss/layot.scss',['layout-css']);
	gulp.watch('./source/scss/base.scss',['base-css']);
});
