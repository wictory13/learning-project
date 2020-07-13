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
                test: /\.(c|le)ss$/,
                use: [
                    'classnames-loader',
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: "[name]-[local]-[hash:base64:3]"
                            }
                        }
                    }, 'less-loader',]
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