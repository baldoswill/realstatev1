const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    stats: 'errors-only',
    mode: 'development',
    devtool: 'source-map',
    context: path.resolve(__dirname, 'sass'),
    entry: './styles.scss',
    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: miniCssExtractPlugin.loader,
                        options: {
                            reloadAll: true,
                        },
                    },
                    'css-loader?url=false',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif|jpeg|svg)$/i,
                loader: 'url-loader?limit=100000',

                options: {
                    limit: 8192,
                },
            },
            // {
            //     test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            //     loader: 'url-loader?limit=10000&mimetype=application/font-woff',
            // },
            // {
            //     test: /\.(ttf|eot|svg|jpg|png|jpeg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            //     loader: 'file-loader?name=/img/[name].[ext]',
            // },
        ],
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: '../css/[name].css',
        }),
    ],
};

