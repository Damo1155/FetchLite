const del = require("del");

const { Paths } = require("./configuration");

const Cleanup = () => {
    return del([
        `${Paths.Distribution}/**`,
        `${Paths.Source}/**/*.js`],
        { force: true, read: false });
}

module.exports = Cleanup;