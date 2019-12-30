// Entry point for athe webpack
// import {writeToScreen} from './test'

// writeToScreen()

import { changeH1 } from './test'

changeH1("See it hot reload...!!")

if(module && module.hot) module.hot.accept();