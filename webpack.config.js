const path = require('path');

// Following import is used for the minification
const TerserPlugin = require('terser-webpack-plugin')

// Following import is used creating differnt buld file for css code 
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// webpack plugin import
const WebpackCleanupPlugin = require('webpack-cleanup-plugin') 

// import to genrate html automatically
const htmlWebpackPlugin = require('html-webpack-plugin')

// webpack
const webpack = require('webpack')

module.exports = {

    mode: 'development',
    entry: {
        myfile :'./src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename:'js/[name].[hash].js', 
      publicPath: '/assets/',
   },
   devServer:{
       port: 1234,
       contentBase: path.join(__dirname, 'dist'),
       writeToDisk: true,
       inline: true,
    //    hot: true
   },
   module:{
      rules: [
        {
            test: /\.(png|jpg)$/,
            use: [
                'file-loader'
            ]
        },
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
            test: /\.scss$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options:{
                    presets: ['@babel/env'],
                    plugins: ['transform-class-properties']
                }
            }
        },
        {
            test: /\.hbs$/,
            use: ['handlebars-loader']
        }
      ] 
   }, 
   plugins: [
       new TerserPlugin(),
       new MiniCssExtractPlugin({
        path: path.resolve(__dirname, 'dist'),
        filename:'css/[name].[hash].css', 
        publicPath: '/assets/',
       }),
       new WebpackCleanupPlugin({
        // exclude: ["index.html"],
       }),
       new htmlWebpackPlugin({
           title:'Webpack setpu',
           template: 'src/index.hbs',
           description: "Adding note how to set up webpack config"
       }),
    //    new webpack.HotModuleReplacementPlugin()
   ]
}