const { series } = require("gulp");

const cleanup = require("./Build/Gulp/cleanup"),
    typescript = require("./Build/Gulp/typescript"),
    { Webpack } = require("./Build/Gulp/webpack");

// Tasks
exports.production = series(cleanup, typescript, Webpack);