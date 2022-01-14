const { exec } = require("child_process");

const errorHandling = require("./errorHandling");

const Webpack = (done) => {
    exec("npm run webpack", (error, stdout, stderr) => {
        done(errorHandling(error, stdout, stderr));
    });
}

const RunServe = (done) => {
    exec("npm run serve", (error, stdout, stderr) => {
        done(errorHandling(error, stdout, stderr));
    });
}

module.exports = {
    Webpack,
    RunServe
};