const path = require('path')

module.exports = {
    devtool: 'source-map',
    entry: './src/index.tsx',
    output: {
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(ts|js)x?$/,
                include: path.join(__dirname, 'src'),
                use: {
                    loader: 'babel-loader'
                }
            },
        ],
    },
}