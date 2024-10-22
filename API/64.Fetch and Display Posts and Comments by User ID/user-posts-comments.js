const button = document.querySelector('button')
const input = document.querySelector('input')
const post = document.getElementById('posts')

button.addEventListener('click', () => {
    const userId = input.value
    console.log(userId)
    fetchData(userId)

})

async function fetchData(userId) {
    const res1 = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    const data = await res1.json()
    console.log(data)
}