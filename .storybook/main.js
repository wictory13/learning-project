const path = require('path');

module.exports = {
    addons: ['@storybook/addon-actions/register'],
    stories: ['../src/stories/**/*.stories.tsx'],
    webpackFinal: (config) => {
        config.module.rules = [];
        config.module.rules.push({
            test: /\.(c|le)ss$/,
            include: path.join(__dirname, "..", 'src'),
            use: [
                'classnames-loader',
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }, 'less-loader']
        });
        config.module.rules.push({
            test: /\.(ts|js)x?$/,
            include: path.join(__dirname, "..", 'src'),
            use: {
                loader: 'babel-loader'
            }
        });
        config.resolve.extensions.push('.tsx', '.ts');
        return config;
    }
};