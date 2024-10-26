const formSubmit = document.getElementById('formSubmit')
const submitBtn = document.querySelector('button')

// let taskTitle = document.getElementById('taskTitle').value
// let taskDescription = document.getElementById('taskDescription').value
// let taskDueDate = document.getElementById('taskDueDate').value
// let priorityLevel = document.getElementById('priorityLevel').value


const todoContainer = document.getElementById('todoContainer')

formSubmit.addEventListener('submit',(event)=> {
    event.preventDefault()
    let taskTitle = document.getElementById('taskTitle').value
    let taskDescription = document.getElementById('taskDescription').value
    let taskDueDate = document.getElementById('taskDueDate').value
    let priorityLevel = document.getElementById('priorityLevel').value
    const list = document.createElement('div')

    list.innerHTML =`
        <ul>
            <li>Task Title: ${taskTitle}</li>
            <li>Task Description: ${taskDescription}</li>
            <li>Task Due Date: ${taskDueDate}</li>
            <li>Task Priority Level: ${priorityLevel}</li>
            <button class="edit" >Edit</button>
            <button class="delete" >Delete</button>
        </ul> `
    todoContainer.appendChild(list)
    clearForm()
        
})


todoContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('edit')) {
        event.stopPropagation();
        alert("Edit your task again")
        let taskTitle = document.getElementById('taskTitle').value
        let taskDescription = document.getElementById('taskDescription').value
        let taskDueDate = document.getElementById('taskDueDate').value
        let priorityLevel = document.getElementById('priorityLevel').value

        const list = document.createElement('div')
            list.innerHTML =`
            <ul>
                <li>Task Title: ${taskTitle}</li>
                <li>Task Description: ${taskDescription}</li>
                <li>Task Due Date: ${taskDueDate}</li>
                <li>Task Priority Level: ${priorityLevel}</li>
                <button class="edit" >Edit</button>
                <button class="delete" >Delete</button>
            </ul> `
        
        event.target.parentNode.add(list);       
        
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

    // taskTitle="" 
    // taskDescription = ""
    // taskDueDate = ""
    // priorityLevel = ""

}
