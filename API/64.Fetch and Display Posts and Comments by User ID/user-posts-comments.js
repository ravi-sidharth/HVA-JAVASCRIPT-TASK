const button = document.querySelector('button')
const input = document.querySelector('input')
const postContainer = document.getElementById('posts')

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

async function fetchPosts(data) {
    for (let post of data){
        const postDiv = document.createElement('div')
        const postId = document.createElement('p')
        const postUserId = document.createElement('p')
        const postTitle= document.createElement('p')
        const postBody = document.createElement('p')

        postId.innerText=`Post ID: ${post.id}`
        postUserId.innerText=`User ID: ${post.userId}`
        postTitle.innerText=`Title: ${post.title}`
        postBody.innerText=`Body: ${post.body}`

        postDiv.appendChild(postId)
        postDiv.appendChild(postUserId)
        postDiv.appendChild(postTitle)
        postDiv.appendChild(postBody)

        postContainer.appendChild(postDiv)

        const res1 = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
        const data1= await res1.json()
        // console.log(data1)

        data1.forEach((comment)=>{
            const commentDiv = document.createElement('div')
            const commentId = document.createElement('p')
            const commentPostId = document.createElement('p')
            const commentName= document.createElement('p')
            const commentEmail= document.createElement('p')
            const commentBody = document.createElement('p')

            commentId.innerText=`Comment ID: ${comment.id}`
            commentPostId.innerText= `Post ID: ${comment.postId}`;
            commentName.innerText=`Name: ${comment.name}`
            commentEmail.innerText=`Email: ${comment.email}`
            commentBody.innerText=`Comment: ${comment.body}`
            // console.log("comment: ",comment)

            commentDiv.appendChild(commentId)
            commentDiv.appendChild(commentPostId)
            commentDiv.appendChild(commentName)
            commentDiv.appendChild(commentEmail)
            commentDiv.appendChild(commentBody)
            postContainer.appendChild(commentDiv)
    
        })
    }
}
