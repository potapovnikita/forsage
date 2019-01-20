const gulp = require('gulp');
const sftp = require('gulp-sftp');

gulp.task('deploy:production', function () {
    return gulp.src('dist/**/*')
        .pipe(sftp({
            host: '31.31.196.165',
            // keyContents: '' ,// process.env.SSH_KEY,
            user: 'u0635367',
            pass: 'UoBU4yG_',
            remotePath: '/www/forsagedanceschool.ru/'
        }));
});
