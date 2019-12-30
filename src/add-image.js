import ReactWebpack from './react-webpack.png'


function addImage(){
    const img = document.createElement('img');
    img.alt='react-webpack';
    img.width=300;
    img.src=ReactWebpack;

    const body = document.querySelector('body');
    body.appendChild(img);
    
}

export default addImage