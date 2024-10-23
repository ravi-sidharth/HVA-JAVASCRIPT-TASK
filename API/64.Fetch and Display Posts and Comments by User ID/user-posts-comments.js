const button = document.querySelector('button')
const input = document.querySelector('input')
const post = document.getElementById('posts')

button.addEventListener('click', () => {
    const userId = input.value
    console.log(userId)
    fetchData(userId)
})

async function fetchData(userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    const data = await res.json()
    console.log(data)

    fetchPosts(data)  
}

function fetchPosts(data) {
    data.forEach(async(post)=>{
        console.log(post.id)
        const res1 = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
        const data1= await res1.json()
        console.log(data1)
    })
}