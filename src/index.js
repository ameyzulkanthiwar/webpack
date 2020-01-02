/**
 * Entry point for athe webpack
*/ 

// import {writeToScreen} from './test'

// writeToScreen()

import { changeH1 } from './test'
import addImage from './add-image.js'
import helloWorldButton from './components/hello-world-button/hello-world'
import heading from './components/heading'

changeH1("See it hot reload....||||...!!"); 
addImage(); 

const Button = new helloWorldButton()
Button.render();
const h = new heading()
h.contentMethod();


const count = 10;

changeH1(count);

if(module && module.hot) module.hot.accept();