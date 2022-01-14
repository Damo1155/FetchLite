const ErrorHandling = (error, stdout, stderr) => {
    if (stdout) {
        console.log(stdout);
    }

    if (stderr) {
        console.log(stderr);
    }

    return error;
}


module.exports = ErrorHandling;