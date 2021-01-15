/**
 * * Importing Installed Plugins For Webpack
 * ! (NOT LOADERS)
 * ? Go To Webpacks Website To See List Of Webpack Plugins
 */
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const path = require('path')

// * Change The Return To True For All Files Minify
function minifyRun() {
    return false
}

/**
 * ! This Is Webpack Setup : Read More On Webpacks Site
 */
module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        polyfill: '@babel/polyfill',
        component: './component.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'component_bundle.[contenthash].js',
    },
    module: {
        rules: [
            // * Loaders Are Here, Webpack Checks Files By Ext And Then Decides
            // * To Run Witch Loader On Them
            // Ex. (mjs and js files will loaded using babel loader and prettier loader)
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader'],
            },
            {
                test: /\.m?js$/,
                enforce: 'pre',
                exclude: /node_modules|dist/,
                use: ['prettier-loader'],
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.sass$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        publicPath: './resources/images',
                        outputPath: './resources/images',
                        name: '[name].[ext]',
                        
                    }
                  },
                ],
            },
            {
                test: /\.(eot|ttf|woff|woff2)?$/,
                loader: 'file-loader',
                options: {
                    publicPath: './resources/fonts',
                    outputPath: 'resources/fonts',
                    name: '[name].[ext]',
                    
                }
            }
        ],
    },
    plugins: [
        new ESLintPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/templates/index.html',
            title: 'Webpack',
            minify: minifyRun()
        }),
        new MiniCssExtractPlugin({
            filename: 'style_v1_bundle.[contenthash].css'
        }),
        new CleanWebpackPlugin()],
    optimization: {
        minimize: minifyRun()
    },
}
