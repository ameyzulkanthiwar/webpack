import './heading.scss'

class heading{
    contentMethod(){
        const header = document.createElement('h1');
        header.innerHTML = " Header for the project";
        const body = document.querySelector('body')
        body.append(header)
    }
}

export default heading