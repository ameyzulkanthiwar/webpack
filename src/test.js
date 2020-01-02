export function writeToScreen(){
    document.write("Hello World from webpack............!")
}

export function changeH1(text){
    const h = document.createElement('h1')
    h.innerHTML = text 
    const bod =document.querySelector('body')
    bod.appendChild(h)
}