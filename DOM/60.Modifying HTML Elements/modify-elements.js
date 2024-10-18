const button = document.querySelector('button')
button.addEventListener('click',()=> {
    const p = document.querySelector('p')
    p.innerText="Text has been Changed!"
})

const div = document.querySelector('div')
div.addEventListener('mouseover',()=> {
    div.style.color ="blue"
    div.style.backgroundColor ="yellow"
})

const btn = document.getElementById('button')
const htmlContent = document.getElementById('htmlContent')
btn.addEventListener('click',()=> {
    htmlContent.innerHTML=`<p>My Name is Ravi</p>`
})

const togglepara= document.querySelector('.togglep')
const togglebtn = document.getElementById('toggle')


togglebtn.addEventListener('click',()=> {
   togglepara.classList.toggle('hidden')
})

