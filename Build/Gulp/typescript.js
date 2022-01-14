const { dest } = require("gulp"),
    { createProject } = require("gulp-typescript");

const tsProject = createProject("tsconfig.json");

const Typescript = () => {
    return tsProject.src().pipe(tsProject()).js
        .pipe(dest((file) => file.base));
}

module.exports = Typescript;