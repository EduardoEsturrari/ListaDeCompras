let textInput = document.getElementById('text-input')
let addButton = document.getElementById('button-input')
let list = document.getElementById('ul')
let xButton = document.getElementsByClassName('xButton')

function createElement(){

    if(textInput.value != ""){

        let li = document.createElement('li')

        let xButton = document.createElement('button')
        xButton.innerHTML = 'X'
        xButton.className = 'xButton'

        let text = document.createTextNode(textInput.value)

        li.appendChild(text)
        li.appendChild(xButton)
        ul.appendChild(li)

        textInput.value = ""
        xButtonEvent()
    }
}

 function deleteItem(){
    this.parentElement.remove()
}

function xButtonEvent(){
    for(let i = 0; i < xButton.length; i++){
        xButton[i].addEventListener('click', deleteItem)
    }
}

xButtonEvent()
addButton.addEventListener('click', createElement)

function addItem(){
    if(event.keyCode == 13){
        if(textInput.value != ""){

            let li = document.createElement('li')
    
            let xButton = document.createElement('button')
            xButton.innerHTML = 'X'
            xButton.className = 'xButton'
    
            let text = document.createTextNode(textInput.value)
    
            li.appendChild(text)
            li.appendChild(xButton)
            ul.appendChild(li)
    
            textInput.value = ""
            xButtonEvent()
        }
    }

    }

