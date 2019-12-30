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

        }
      ] 
   }
}