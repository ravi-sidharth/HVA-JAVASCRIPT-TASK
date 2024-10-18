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
