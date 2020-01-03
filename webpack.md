# Webpack config details
    NOTE: To run the prevew in vs code "ctrl + shilft + V"

How does webpoack know to run this file?
 * Answer: now we can see that this file has spacial name which is "webpack.config.js" so when we run the the command "npm run build" then it will look for this file
 * NOTE: if we want to chane the name of this file I mean
from "webpack.config.js" to anything else for ex. "myconfig.js"
then we need to make suer in the package.json we need to change the build script line
```
  "build": "webpack --config myconfig.js"
```
 * like as shown above.
---
# mode config
* Bacically it help us to build the config for perticular mode
* Mode: production mode, devlopment mode
* devlopment mode is kind of verbose there is lot of comments
* and we care about the performance and devlopment speed and
* on the other hand production mode is squize in size and 
* space of js files
```
module.exports = {
    mode: 'development',
}
```
---
# Entery point or entry config
* NOTE: entry: './src/index.js' //<<-- this is usual convention
* But what if we have different file name means rather then index.js 
* some thing else xyz.js or anything else then 
* entry: 'path_to_that_file'
```
module.exports = {
    mode: 'development',
    entry: './src/index.js'
}
```    
# Output config

* Output configration in the webpack
* Now what is output config? so with till this point what configration is done is that if we run "npm run build" command then we can see that 
* in the dist folder it produce main.js file and we do not have control over the name of the file and where it is created.  
* So we control this using output configration
    * 1st thing We need to say the file name we want And at this point if run command we can see that build.js is created in the dist/js folder
    * "path" decides the location for file and below build is name of the folder
    * "filename" decide the name of the file
       
```
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename:'js/build.js',
    },
}
```
---
# Plceholder Config
    There are different type of place holder
    [hash] 
    [chunckhash]
    [name] 
    [id]
    [query] 
    [contenthash]
* NOTE: Rather the hard coding the build file name we can give the hash value or something else with is genrated whenever we run the build command
* so in the above output config we can see that we put the [name] and [constenthash] we are using the name hash place holder and content hash placeholder now for this input this output build is genrated like myfile.build.js liek this 
* NOTE: Look at the entery point name and outpust carefull
* contenthash is usefull at the time of cash busting 
* consider we are in the production and we make the changes to the 
* js file and we want to prapogate this to output at this time by 
* rather creating the by file name we can create build using the contenthash name
* content change -> hash change -> hash change then name of the file change and broweser force to do the work with new file  

```
module.exports = {
    mode: 'development',
    entry: {
        myfile :'./src/index.js'
    },

   output: {
       path: path.resolve(__dirname, 'build'),
       filename:'js/[name].[contenthash].build.js',
   },
}
```    
---
# Publicpath
* usage of "publicPath"
* It is bacically used for web pack to undastand.
* Consider we have production app ok and we have file name like
    * js/1.js (react dom library) 
    * js/2.js (I wrote) 
    * js/3.js (node_module)
* and this files are having information about each other like 2.js know
* how to and when to load the 1.js and 3.js and this information need to know 
* by the web pack and to know that we need to spacify in the publicPath
* so it's like webpack know which file to look but where exactly to look that information he get from the publicPath
```
module.exports = {

    mode: 'development',
    entry: {
        myfile :'./src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename:'js/[name].[contenthash].build.js', 
      
      // js/1.js (react dom library) , 
      // js/2.js (I wrote), 
      // js/3.js (node_module)
      
      publicPath: '/assets/'
      // ex. PublicPath
      // localhost:3000
      // https://Name_Of_website
      // https://server.com/assets/js/1.js
   },

}
```
Better Explan here:

## output.path
---
Local disk directory to store all your output files (Absolute path).

Example: path.join(__dirname, "build/")

Webpack will output everything into localdisk/path-to-your-project/build/


## output.publicPath
---
Where you uploaded your bundled files. (Relative to server root)

* Example: /assets/

Assumed you deployed the app at server root http://server/.

By using /assets/, the app will find webpack assets at: http://server/assets/. Under the hood, every urls that webpack encounters will be re-written to begin with "/assets/".
```
src="picture.jpg" Re-writes ➡ src="/assets/picture.jpg"
```
Accessed by: (http://server/assets/picture.jpg)

src="/img/picture.jpg" Re-writes ➡ src="/assets/img/picture.jpg"

Accessed by: (http://server/assets/img/picture.jpg)

MORE: https://github.com/webpack/docs/wiki/configuration#outputpublicpath

# Library Target
* Webpack allowes you to eco out certan type of export import
* Like back in the day we need to mantion script tag
* Now a days we use ES6 import, export syntax
* in commonJs we use require and module.export
* we need tell libraryTarget, what kind of code we want webpack to create for our pourpose

we can give differnet values to libraryTarget
```
libraryTarget:'var',
library: 'Library_Name'
```
or
```
libraryTarget:'commonjs'
library: 'Library_Name'
```
or
```
libraryTarget:'amd'
library: 'Library_Name'
```
or
Following code will compatable withh all "umd" which means 
"Universal Module Definatioin"
```
libraryTarget:'umd'
library: 'Library_Name'
```
This is how we will write the config then
```
module.exports = {

    mode: 'development',
    entry: {
        myfile :'./src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename:'js/[name].[contenthash].build.js',
      publicPath: '/assets/',
      libraryTarget:'umd'
      library: 'Library_Name'
   }

}
```

# Webpack devlopment server
We do not need to do anything we get the default server to use in the weback install webpack-dev-server to downlode use the following command
```
npm i webpack-dev-server --save-dev
```
#### What will it do?

Behind the seen it create the server for us and builds the webpack, monitor our files, relode the page even hot module reloding if we want.

NOTE: with out dev server if we want to run the projwct then we need to build 1st and the use the file protocol [File Protocal means you put the path of file in a browser to run that code ],

* DevServer Configration 
* Port: it will run the dev server on the given or mention port
* ContentBase : it will use the file which will serve by build which 
* might not be ganrated at the time of writing this code
```
   devServer:{
       port: 1234,
       contentBase: path.join(__dirname, 'dist')
   }
```
### Main config will look like this
```
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
       contentBase: path.join(__dirname, 'dist')
   }
}
```

At this point I did make some other changes too
```
<script src='/assets/js/myfile.js'></script>
```
NOTE: With this configration if change anything in the file it will appare on the screen, I do       not need to kill the process and start again

webpack-dev-server does not use the build genrated by the build command, it do its own process and save it into memory(RAM) and use it from there but if we want to see what webpack is doing behind the hood and what it stoiring into the memory(RAM) then write following line of code  and it will genrate the file in the folder
```
writeToDisk: true
```

# Hot Reloading

With out refrashing it updated the data on the screen.

To achive hot reloading we need to add one plugin and hot attribute in the config
```
const path = require('path');
const webpack = require('webpack') //<<<< added
    
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
       hot: true //<<<< added
   },
   plugins: [new webpack.HotModuleReplacementPlugin()] //<<<< added
}
```
one more small change rather then importing
```
export function writeToScreen(){
    document.write("Hello World from webpack............!")
}
```
we are importing below code just becouse of this "document.write"
```
export function changeH1(text){
    document.querySelector('h1').innerText = text 
}
```

# Loaders

In webpack we can import css file into Java Script files, SCSS, Handle Bar, LESS

    Webpack loaders are javascript library which help you to import all this stuff

We use the rule config to add loader. It is an array of an object

Rule contain atlist 2 properties

* test 
* use

test: check wather file contains the png or jpg 

I think becically it look for the condition means regular expration

use: we need to notify webpack which loader need to use wen its jpg or png file (test condition)

So here when ever we are importing jpg or png webpack will check rule for it wather 
we have added the rule for it or not

```
const path = require('path');
    
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
        {
            test: /\.(png|jpg)$/,
            use: [
                'file-loader'
            ]

        }
      ] 
   }
}
```
NOTE: Make suer we have install the loader that we are adding in the use attibute or may say config for above code we we arr adding the "file-loader"
```
npm i file-loader --save-dev
```

# CSS Loader

like from above you we can see how to tell webpack what to do if we want to use the css import or css file

In use attribute we need to pass two loaders 
    
    'style-loader' and 'css-loader' 

style-loader:  style loader will put css file into the html file

css-loader: css loader will create css file

```
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
            loader: ['style-loader', 'css-loader'],
        },
      ] 
   }
```

    NOTE: sequence of the loader matters here in above example if we write 'css-loader' 1st and then style loader then it will break becouse there work is inter dependant like 'style-loader' will use the work of 'css-loader'


# USE SCSS In the project

code for the scss use in project is below
```
{
    test: /\.scss$/i,
    use: ['style-loader', 'css-loader', 'sass-loader'],
}
```
    Note: Here we are install 'sass-loader' not a 'scss-loader' along with sass-loader we also need to install 'node-sass' for some reason. if we no not intall then it will bitch about it.

```
npm i sass-loader node-sass --save-dev
```

# Babel

all the feature that you want to use from the javascript we need to mention in the plugins.
In short we need to know the name of all the feature that we are using, because  we need to add those feature in the plugin 

while installing look for proper version

sequence of intallation does not matter.

even thought in package.json it showes "^" this sign which mean grater than this verstion we need to make suer we are adding proper version

NOW LETS TALK ABOUT THE BABEL CONFIGRATION

```
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
```

We have use the above rule for the bable config
Now:

exclude: gives a ability to not involve perticular path or folder for the considration
in our case we excluding node modules file

loader : as we know we mention wat type of loaders we want to use on the perticular file

options: it helps to extend the rule for teh perticular loader in our case we are extending the babel-loader

    Babel preset-env is a preset that compiles down to a minimum of ES5 ( preset-es2015 ), but can also take a browser or runtime version and determine which plugins are needed for that specific environment! This avoids the problem of targeting a spec! It also avoids unnecessarily compiling code that does not need to be.

what is presets: https://stackoverflow.com/questions/46684753/what-is-a-babel-preset-what-does-stage-mean

Technically presets are collections of plugins (as Quentin says)

The usecase is the support of particular language features.

Presets are sharable .babelrc configs or simply an array of babel plugins.

plugins: Mention in the next set (In a nut shell aits array of all the feature that you want to use for the lunguage or test)

this are the pacages we have used in the project
```
"@babel/core": "^7.0.0-beta.40",
"@babel/preset-env": "^7.7.7",
"babel-core": "^6.26.3",
"babel-loader": "^8.0.6",
"babel-plugin-transform-class-properties": "^6.24.1",
"babel-preset-env": "^1.7.0",
```
but below packages will also works perfectly fine
```
"@babel/core": "^7.7.7",
"@babel/preset-env": "^7.7.7",
"babel-loader": "^8.0.6",
"babel-plugin-transform-class-properties": "^6.24.1",
```

# Plugins

Plugin are additional javascript library that do everything that loaders "cannot" do

Plugin can also modified.

    ************* IMP ************
    ******************************
    When ever we want to import something we use the loader like when we want to import css file we use the css loader we want to scss we use sass loader. So what we do when we need to do something different then the importing we use plugins.

    What we can do with plugins:
    we can define global veriable for whole project
    we can minify the content or may say file (space compexcity)
    we can genrate different file
    ...
    ...
    etc.


# Minification of the webpack bundle

It is important to have the bundle size small so it can get dounlode quick consider if user is using the web site the we wnt it to load quick at that kind of time minification help a lot.

We need to import the 'terser-webpack-plugin' for using the instance and we can use the uglify js to but this one is the new one and Recomended way to do.

    const TerserPlugin = require('terser-webpack-plugin')

and plugin code is 

    plugins: [
        new TerserPlugin()
    ]

# Extract css into a seperate file in bundle

This seperating css code in theseprate file helps us in the production.

HOw exactly it hepls:

ok if we make different bundle file for different code like for js diferent for css different and for HTML different then there will be 3 file of different size and all file will load parallely like rather then downloding 10kb in one we are downloding 2kb 5kb and 3 kb files in parallel . In this second case we will able to downlode the file quickliy. (this is jsut a example to make undastand the consept)

    npm install mini-css-extract-plugin --save-dev

```
const path = require('path');

// Following import is used for the minification
const TerserPlugin = require('terser-webpack-plugin')

// FOLLOWING IMPORT IS FOR SEPRATION
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
        {
            test: /\.(png|jpg)$/,
            use: [
                'file-loader'
            ]
        },
        {
            test: /\.css$/i,
            
            // NOTE: WE DO CHAGE THE STYLE-LOADER TO MiniCssExtractPlugin.loader 
            
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
            test: /\.scss$/i,
            
            // NOTE: WE DO CHAGE THE STYLE-LOADER TO MiniCssExtractPlugin.loader 
            
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
      
       //FOLLOWING CODE IS FOR SEPERATION

       new MiniCssExtractPlugin({
        path: path.resolve(__dirname, 'dist'),
        filename:'css/[name].css', 
        publicPath: '/assets/',
       })
   ]
}
```

Make suer to put the bundle into the html file for css other wise we will not able too see the styling 

In our case we put the link in head section of the html

    <link rel='stylesheet' href='/assets/css/myfile.css'>


# Browser Cashing

The cache is a software or hardware component that is used to temporarily store values for faster future access. 

The browser cache is a small database of files that contains downloaded web page resources, such as images, videos, CSS, Javascript, and so on.

For more Information: https://pressidium.com/blog/2017/browser-cache-work/

    we use the contenthash placeholder for changing file name on every build.

# Genrate HTML File automatically

'htmlWebpackPlugin' plugin is used for genrating automatic html in the bundle

```
npm install html-webpack-plugin --save-dev
```
1st import and then use the instance in the plugin array

code for mporting html file

    ..
    ..
    const htmlWebpackPlugin = require('html-webpack-plugin')
    ..
    ..

    ..
    plugins:[
        ..
        new htmlWebpackPlugin()
    ]

Link to get more information about the html webpack plugins https://github.com/jantimon/html-webpack-plugin#options


Here if you want to custoomize the automated genrated html then we can use the template 

For example In the project I am using the handle bar template

To customize html 1st we need to create the html file with template extention her in the project we are usng the 'index.hbs' now after that becose we are using different file extention we need to use the loader we need to tell what to do when you see that type of extention I mean what to do for '.hbs' extention

so we need to install handlebars-loader

    npm install --save-dev handlebars-loader

Then add the new rule in the module 

    {
        test: /\.hbs$/,
        use: ['handlebars-loader']
    }

now in the plugne we can add object.

    new htmlWebpackPlugin({
           title:'Webpack setpu',
           template: 'src/index.hbs',
           description: "Adding note how to set up webpack config"
       }),

And now use the attribute mention here in the template the attribute that I am talking about are 'title' and 'description'

index.hbs
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
     <--! look at this line-->
    <title>{{htmlWebpackPlugin.options.title}}</title>

    <--! look at this line-->
    <meta 
        name='discription' 
        content='{{htmlWebpackPlugin.options.description}}'
    > 
  <body>
  </body>
</html>
```


# cleanup at the time of buld proceess 

'webpack-cleanup-plugin' plugin we use to do the clean up at the time of build process

```
npm install --save-dev webpack-cleanup-plugin
```
and then add intsnce of it in the plugin array

    NOTE: it will hep you to clean up the extra files at the time of build process but not at the time when we are running the dev-server

