const path = require('path');

// Following import is used for the minification
const TerserPlugin = require('terser-webpack-plugin')

// Following import is used creating differnt buld file for css code 
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {

    mode: 'development',
    entry: {
        myfile :'./src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename:'js/[name].js', 
      publicPath: '/assets/',
   },
   devServer:{
       port: 1234,
       contentBase: path.join(__dirname, 'dist'),
       writeToDisk: true,
   },
   module:{
      rules: [
        //  Rule contain atlist 2 properties
        // 1.test 2.use
        // test: check wather file contains the png or jpg 
        // I think becically it look for the condition means regular expration
        // use: we need to notify webpack which loader need to use wen its jpg or png file
        // So here whene ever we are importing jpg or png webpack will check rule for it wather 
        // we have added the rule for it or not
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
        }
      ] 
   }, 
   plugins: [
       new TerserPlugin(),
       new MiniCssExtractPlugin({
        path: path.resolve(__dirname, 'dist'),
        filename:'css/[name].css', 
        publicPath: '/assets/',
       })
   ]
}