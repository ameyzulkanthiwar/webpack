/** How does webpoack know to run this file?
 * Answer: now we can see that this file has spacial name which is
 * "webpack.config.js"
 * so when we run the the command "npm run build" then 
 * it will look for this file
 * NOTE: if we want to chane the name of this file I mean
 * from "webpack.config.js" to anything else for ex. "myconfig.js"
 * then we need to make suer in the package.json we need to change the build script line
 * "build": "webpack --config myconfig.js"
 * like as shown above.
 * */

const path = require('path');

// Following configration will be get used by the webpack
module.exports = {
    entery
}