/**
 * Entry point for athe webpack
*/ 

// import {writeToScreen} from './test'

// writeToScreen()

import { changeH1 } from './test'
import addImage from './add-image.js'

changeH1("See it hot reload...!!");
addImage();

// if(module && module.hot) module.hot.accept();