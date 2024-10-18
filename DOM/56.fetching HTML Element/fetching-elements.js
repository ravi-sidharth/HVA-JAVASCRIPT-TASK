//a. Create the HTML Structure:
const myDiv = document.getElementById('myDiv')
//b. Fetch Elements by ID:
// console.log(myDiv)

//c. Fetch Element by Class:
const myClass = document.getElementsByClassName('myClass')
// console.log(myClass)

// d. Fetch Elements by Tag Name:
const textElement = document.getElementsByTagName('p')
// console.log(textElement)

// e. Fetch Elements Using Query Selector All:
let highlight = document.querySelectorAll('.highlight')
console.log(highlight)

// f. Fetch Elements Using Query Selector:
highlight = document.querySelector('.highlight')
console.log(highlight)


