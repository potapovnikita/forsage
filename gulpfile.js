const gulp = require('gulp');
const GulpSSH = require('gulp-ssh')


// gulp.task('deploy:production', function () {
//     return gulp.src('dist/**/*')
//         .pipe(sftp({
//             host: '31.31.196.165',
//             user: 'u0635367',
//             pass: 'UoBU4yG_',
//             remotePath: 'www/forsagedanceschool.ru/',
//             timeout: 60000,
//         }));
// });

const config = {
    host: '31.31.196.165',
    port: 22,
    username: 'u0635367',
    password: 'UoBU4yG_',
}

const gulpSSH = new GulpSSH({
    ignoreErrors: false,
    sshConfig: config
})

gulp.task('deploy:production', function () {
    return gulp
        .src(['dist/**/*'])
        .pipe(gulpSSH.dest('www/forsagedanceschool.ru/'))
})
