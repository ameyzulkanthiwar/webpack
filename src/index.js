/**
 * Entry point for athe webpack
*/ 

// import {writeToScreen} from './test'

// writeToScreen()

import { changeH1 } from './test'
import addImage from './add-image.js'
import helloWorldButton from './components/hello-world-button/hello-world'

changeH1("See it hot reload...!!");
addImage();

const Button = new helloWorldButton()
Button.render();

// if(module && module.hot) module.hot.accept();