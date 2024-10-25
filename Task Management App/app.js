const formSubmit = document.getElementById('formSubmit')
const submitBtn = document.querySelector('button')

const todoContainer = document.getElementById('todoContainer')

formSubmit.addEventListener('submit',(event)=> {
    event.preventDefault()
    const taskTitle = document.getElementById('taskTitle').value
    const taskDescription = document.getElementById('taskDescription').value
    const taskDueDate = document.getElementById('taskDueDate').value
    const priorityLevel = document.getElementById('priorityLevel').value

    const list = document.createElement('div')

    list.innerHTML =`
        <ul>
            <li>Task Title: ${taskTitle}</li>
            <li>Task Description: ${taskDescription}</li>
            <li>Task Due Date: ${taskDueDate}</li>
            <li>Task Priority Level: ${priorityLevel}</li>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </ul> `
    todoContainer.appendChild(list)
        
})


todoContainer.addEventListener('click',(event)=> {
    event.stopPropagation()

    
})
