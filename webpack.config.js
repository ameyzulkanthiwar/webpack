const path = require('path');
const webpack = require('webpack')
    
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
       //hot: true // it is creating some files that's the reson for commenting out this feature
   },
   plugins: [new webpack.HotModuleReplacementPlugin()]
}