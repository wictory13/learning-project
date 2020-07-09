const path = require('path')

module.exports = {
    devtool: 'source-map',
    entry: './src/index.tsx',
    output: {
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.css']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'classnames-loader',
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }]
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