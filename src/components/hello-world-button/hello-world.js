import './hello-world.scss'

class helloWorldButton{
    classCss = 'hello-world-text';
    render(){
        
        const button = document.createElement('button')
        button.innerHTML = 'Hello World!!!'
        
        //Adding style
        button.classList.add('style-class-hello-world-button')
        
        //Onclick functionality
        button.onclick = function(){
            const p = document.createElement('p');
            p.innerHTML = 'on click text';
            p.classList.add('hello-world-text')
            body.appendChild(p)
        }
        button.classList.add(this.classCss) // this is making other cass override
        const body = document.querySelector('body')
        body.appendChild(button)
    }    
}

export default helloWorldButton;