module.exports = {
    entry: './src/inc/global.js',
    output: {
        path: __dirname,
        filename: 'actorRole.global.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel"
            }
        ]
    },
    devtool: 'inline-source-map'
};