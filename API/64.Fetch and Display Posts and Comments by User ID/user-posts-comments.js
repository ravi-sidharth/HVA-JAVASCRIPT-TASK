const button = document.querySelector('button')
const input = document.getElementById('input')
const post = document.getElementById('post')

button.addEventListener('click',()=> {
    const userId =input.value
    console.log(userId)

    const res1 = fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

    const data = res1.json()

})