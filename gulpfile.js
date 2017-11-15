//在gulpfule.js中输入代码 ：
//var gulp = require('gulp');
//var uglify = require('gulp-uglify'); //js压缩插件
//var bom = require('gulp-bom'); //解决中文乱码插件
//var minifyCss = require('gulp-minify-css'); //css压缩插件
//var minifyHtml = require('gulp-minify-html'); //html压缩插件
//var imagemin = require('gulp-imagemin'); //图片压缩相关插件
//var pngquant = require('imagemin-pngquant'); //png图片压缩插件
//var rename = require('gulp-rename'); //重命名插件


var gulp = require('gulp');
var babel = require('gulp-babel'); //es6转es5
var uglify = require('gulp-uglify'); //js压缩插件



//压缩js

gulp.task('jsTask', function(){
	gulp.src('src/js/myPlane.js')
	.pipe(babel({"presets": ["es2015"]})) //es6转es5
	.pipe(uglify()) //js压缩
	.pipe(gulp.dest('dest/js'));
});
gulp.task('default', ['jsTask']);




//压缩css
//gulp.task('cssTask', function(){
//	gulp.src('src/css/*')
//	.pipe(minifyCss())
//	.pipe(gulp.dest('dest/css'));
//});