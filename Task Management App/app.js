let count =0 
const formSubmit = document.getElementById('formSubmit')
const submitBtn = document.querySelector('button')

const todoContainer = document.getElementById('todoContainer')
formSubmit.addEventListener('submit',(event)=> { 
    event.preventDefault()
    let taskTitle = document.getElementById('taskTitle').value
    let taskDescription = document.getElementById('taskDescription').value
    let taskDueDate = document.getElementById('taskDueDate').value
    let priorityLevel = document.getElementById('priorityLevel').value
    const list = document.createElement('div')
    list.setAttribute('id', `task-${count}`); 
    list.className ="bg-fuchsia-500 rounded-lg mt-4 p-2 border-2"
    list.innerHTML =`
        <ul >
            <li>Task Title: ${taskTitle}</li>
            <li>Task Description: ${taskDescription}</li>
            <li>Task Due Date: ${taskDueDate}</li>
            <li>Task Priority Level: ${priorityLevel}</li>
            <button class="edit text-white p-1 bg-yellow-700 rounded-lg" >Edit</button>
            <button class="delete text-white p-1 bg-red-700 rounded-lg" >Delete</button>
        </ul> `
    todoContainer.appendChild(list)
    clearForm()
    count++
})


todoContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('edit')) {
        event.stopPropagation();
        // alert("Edit your task again")
        let task = document.getElementById(`task-${count}`)
        let taskTitle = document.getElementById('taskTitle').value
        let taskDescription = document.getElementById('taskDescription').value
        let taskDueDate = document.getElementById('taskDueDate').value
        let priorityLevel = document.getElementById('priorityLevel').value
        console.log(task)

            task.innerHTML =`
                <li>Task Title: ${taskTitle}</li>
                <li>Task Description: ${taskDescription}</li>
                <li>Task Due Date: ${taskDueDate}</li>
                <li>Task Priority Level: ${priorityLevel}</li>
                <button class="edit" >Edit</button>
                <button class="delete" >Delete</button>`    
    }

    if (event.target.classList.contains('delete')) {
        event.stopPropagation();
        console.log('Delete button clicked');
        event.target.parentNode.remove(); 
    }
});

function clearForm() {
    document.getElementById('taskTitle').value=""
    document.getElementById('taskDescription').value=""
    document.getElementById('taskDueDate').value=""
    document.getElementById('priorityLevel').value=""

}

