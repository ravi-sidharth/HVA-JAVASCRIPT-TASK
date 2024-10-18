count=1
const ul = document.querySelector('#list')
function addListItem() {
   const li = document.createElement('li')
    li.innerText =`New item ${count}` 
    ul.appendChild(li)
}

const addButton = document.getElementById('addButton')
addButton.addEventListener('click',()=> {
    addListItem()
    count++
    
})

function removeLastListItem(){
    const ul = document.querySelector('#list')
    ul.lastElementChild.remove()
    count--
}

const removeButton = document.getElementById('removeButton')
removeButton.addEventListener('click',()=> {
    removeLastListItem()
})