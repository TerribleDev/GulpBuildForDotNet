var gulp = require('gulp');
var nugetRestore = require('gulp-nuget-restore');
var msbuild = require("gulp-msbuild");
var carbon = require('HydroCarbon');
gulp.task('build', function () {
    return gulp.src('WebApplication9.sln')
        .pipe(nugetRestore())
        .pipe(msbuild({
            targets: ['Clean', 'Build'],
            toolsVersion: 14.0}
          ));
});

gulp.task('carbon', function(){

carbon.exec({
  heatFiles: ["installers/heat-web.rsp"],
  candleFiles: ["installers/candle.rsp"],
  lightFiles: ["installers/light.rsp"]
})

});
