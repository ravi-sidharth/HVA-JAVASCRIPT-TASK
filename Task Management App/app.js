let count =0 
let todos=[]
let editingIndex = -1
const formSubmit = document.getElementById('formSubmit')
const submitBtn = document.querySelector('button')


const todoContainer = document.getElementById('todoContainer')

formSubmit.addEventListener('submit',(event)=> { 
    event.preventDefault()
    let taskTitle = document.getElementById('taskTitle').value.trim()
    let taskDescription = document.getElementById('taskDescription').value.trim()
    let taskDueDate = document.getElementById('taskDueDate').value.trim()
    let priorityLevel = document.getElementById('priorityLevel').value.trim()

    const list = document.createElement('div')
    list.className ="bg-fuchsia-500 rounded-lg mt-4 p-2 border-2"
    list.innerHTML =`
        <ul id="todoList" >
            <li>Task Title: ${taskTitle}</li>
            <li>Task Description: ${taskDescription}</li>
            <li>Task Due Date: ${taskDueDate}</li>
            <li>Task Priority Level: ${priorityLevel}</li>
            <button class="edit text-white p-1 bg-yellow-700 rounded-lg" onclick="editTodo(${index})">Edit</button>
            <button class="delete text-white p-1 bg-red-700 rounded-lg" onclick="editTodo(${index})">Delete</button>
        </ul> `
    todoContainer.appendChild(list)
    clearForm()
    count++
})



function clearForm() {
    document.getElementById('taskTitle').value=""
    document.getElementById('taskDescription').value=""
    document.getElementById('taskDueDate').value=""
    document.getElementById('priorityLevel').value=""

}

