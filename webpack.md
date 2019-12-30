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
* Now what it is output config so with till this point what configration is done with
* that if we run "npm run build" command then we can see that 
* in the dist folder it produce index.html and main.js file 
* and we do not have control over the name of the file and 
* where it is created.  
* So we control this using output configration
    * 1st thing We need to say the file name we want And at 
    * this point if run command we can see that build.js is created
    * in the dist folder
    * "path" decides the location for file and below 
    * build is name of the folder
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
    Thereare different type of place holder
    [hash] 
    [chunckhash]
    [name] 
    [id]
    [query] 
    [contenthash]
* NOTE:
    * rather the hard coding the build file name we can give the
    * hash value or something else with is genrated whenever we run the 
    * build command
* so in the abou output config we can see that we put the [name] 
* and [constenthash] we are using the name hash place holder
* and content hash placeholder now for this input this 
* output build is genrated like myfile.build.js liek this 
* NOTE: Look at the entery point name and outpust carefull
* contenthash is usefull at the time of cash busting 
* consider we are in the production and we make the changes to teh 
* js file and we want to prapogate this to output at this time by 
* rather creating the by file name we can create build using the contenthash name
* content change -> hash change -> hash change then name of the filechange and broweser force to do the work with new file  

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
* js/1.js (react dom library) , js/2.js (I wrote), js/3.js (node_module)
* and this files are having information abot each other like 2.js know
* how to and when to load the 1.js and 3.js and this information need to kow 
* by the web pack and to know that we need to spacify in the publicPath
* so its like webpack know which file to look but where exactly to look that information he get from the publicPath
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
      
      publicPath: '/assets/' //https://server.com/assets/js/1.js
   },

}
```
Better Explan here:

### output.path
Local disk directory to store all your output files (Absolute path).

Example: path.join(__dirname, "build/")

Webpack will output everything into localdisk/path-to-your-project/build/

### output.publicPath
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