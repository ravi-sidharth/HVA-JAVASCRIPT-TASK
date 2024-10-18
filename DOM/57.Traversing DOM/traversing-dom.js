const list1 = document.getElementById('list1')
const firstElementChild= list1.firstElementChild
console.log(firstElementChild)
console.log(list1.nextElementSibling)

const list2 = document.getElementById('list2')
const lastElementChild= list2.lastElementChild
console.log(lastElementChild)
console.log(list2.previousElementSibling)

const list3 = document.getElementById('list3')
const children= list3.children
console.log(children)

//  HTMl collection me for of use karte he 
for (let child of children) {
    console.log(child)
}