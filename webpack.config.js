const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'app');

const config = {
    context: APP_DIR,
    entry: ['babel-polyfill', './index.js'],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: BUILD_DIR,
        open: true,
        compress: true
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            // babel-loader
            {
                test: /\.js$/,
                include: /app/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader?cacheDirectory=true'
                }
            },            
            // css-loader
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },            
            // file loader
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '/images/[name].[ext]',
                        }
                    }
                ]
            }
        ]
    }
};

module.exports = config;