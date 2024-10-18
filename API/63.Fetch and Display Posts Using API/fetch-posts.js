async function fetchPosts() {
    try {
        let res =await fetch("https://jsonplaceholder.typicode.com/posts")
        let result =await res.json()
        // console.log(result) 
        showQuestion(result)
    } catch(error) {
        posts.innerHTML="PAGE NOT FOUND 404!"
        console.log("ERROR: ",error)
    }
}

const posts=document.getElementById('posts')

function showQuestion(result) {
    result.forEach(data => {
        const newDiv = document.createElement('div')
        newDiv.id="post"
        const userId =document.createElement('p')
        const id =document.createElement('p')
        const title =document.createElement('p')
        const body =document.createElement('p')

        userId.innerText=data.userId
        id.innerText=data.id
        title.innerText=data.title
        body.innerText=data.body
        newDiv.appendChild(userId)
        newDiv.appendChild(id)
        newDiv.appendChild(title)
        newDiv.appendChild(body)

        posts.appendChild(newDiv)
    })
}



// const posts=document.getElementById('posts')
// const templateDiv = document.getElementById('template-posts')
// // posts.innerHTML=""
// function showQuestion(result) {
//     result.forEach(data => {
//         const clonePosts = templateDiv.content.cloneNode(true)
//         const userId =clonePosts.querySelector('#userId')
//         const id =clonePosts.querySelector('#id')
//         const title =clonePosts.querySelector('#title')
//         const body =clonePosts.querySelector('#body')

//         userId.innerText=data.userId
//         id.innerText=data.id
//         title.innerText=data.title
//         body.innerText=data.body
//         posts.appendChild(clonePosts)
//     })
// }

fetchPosts()



