const path = require('path')

module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    entry: './src/index.js',
    output: {
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js/,
                include: path.join(__dirname, "src"),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
        ],
    },
}