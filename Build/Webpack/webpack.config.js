// TODO :   Utilise 'webpack-merge' to allow more customisable build pipelines

const path = require("path");

module.exports = {
    mode: "production",
    devtool: "source-map",
    entry: {
        "fetchlite": "./src/fetchlite.ts"
    },
    output: {
        library: "FetchLite",
        libraryTarget: "umd",
        libraryExport: "default",
        filename: "[name].js",
        path: path.resolve(__dirname, "../../dist")
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "babel-loader"
            }
        ]
    },
    resolve: {
        extensions: [".js"],
        alias: {
            "Services": path.resolve(__dirname, "../../src/Services/"),
            "MethodTypes": path.resolve(__dirname, "../../src/MethodTypes/"),
        }
    }
}