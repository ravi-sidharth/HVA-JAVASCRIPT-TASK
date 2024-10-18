const form = document.querySelector('form')

form.addEventListener('submit',(event)=> {
    event.preventDefault()
    console.log("Form Submitted!")
})

const divs = document.querySelectorAll('div')

divs.forEach(div => {
    div.addEventListener('click',function(){
        // console.log(this)
        this.classList.toggle('toggle')
    })
})


const allbtn = document.querySelectorAll('button')
let toggleDiv= document.querySelector('#toggle-div')

allbtn.forEach(btn=> {
    btn.addEventListener('click',()=> {
        // console.log(btn)
        toggleDiv.classList.toggle(btn.className)
        // console.log(toggleDiv.className)
    })
})