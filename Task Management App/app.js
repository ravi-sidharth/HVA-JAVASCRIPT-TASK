let todos = JSON.parse(localStorage.getItem('todos'))
let editingIndex = -1

let formSubmit = document.getElementById('formSubmit')
let submitBtn = document.querySelector('button')
let taskTitle = document.getElementById('taskTitle')
let taskDescription = document.getElementById('taskDescription')
let taskDueDate = document.getElementById('taskDueDate')
let priorityLevel = document.getElementById('priorityLevel')

formSubmit.addEventListener('submit',(event)=> { 
    event.preventDefault()

    const newTask = {
        taskTitle: taskTitle.value.trim(),
        taskDescription: taskDescription.value.trim(),
        taskDueDate: taskDueDate.value.trim(),
        priorityLevel: priorityLevel.value.trim()
    };

    if (editingIndex >= 0) {
        // Update existing todo
        todos[editingIndex] = newTask
        editingIndex =-1
        submitBtn.textContent = "Add Task"; 
        saveTodosToLocalStorage()
    }
    else {
        todos.push(newTask)
    }
    clearForm()
    renderTodos()
})

function clearForm() {
    taskTitle.value=""
    taskDescription.value=""
    taskDueDate.value=""
    priorityLevel.value=""
}

// function start editing a todo 
function editTodo(index){
    const task = todos[index]
    // console.log(task)
    taskTitle.value = task.taskTitle;
    // console.log(task.taskTitle)
    taskDescription.value = task.taskDescription;
    // console.log(task.taskDescription)

    taskDueDate.value = task.taskDueDate;
    // console.log(task.taskDueDate)

    priorityLevel.value = task.priorityLevel;
    // console.log(task.priorityLevel)


    editingIndex=index
    submitBtn.textContent="Update Task"
   
}

// Function to delete a todo
function deleteTodo(index) {
    todos.splice(index,1)
    if (editingIndex===index) {
        editingIndex=-1
        clearForm()
        submitBtn.textContent="Add Task"
    }
    saveTodosToLocalStorage()
    renderTodos()
}

function renderTodos() {
    const todoList = document.getElementById('todoContainer')
    todoList.innerHTML=""
    
    todos.forEach((todo,index)=> {
        const list = document.createElement('div')
        list.className ="bg-fuchsia-500 rounded-lg mt-6 p-3 border-2"
        
        list.innerHTML =`
        <ul>
            <li><strong>Task Title:</strong> ${todo.taskTitle}</li>
            <li><strong>Task Description:</strong> ${todo.taskDescription}</li>
            <li><strong>Task Due Date:</strong> ${todo.taskDueDate}</li>
            <li><strong>Priority Level:</strong> ${todo.priorityLevel}</li>
        </ul>
            <button class="text-white p-1 bg-yellow-700 rounded-lg mr-2" onclick="editTodo(${index})">Edit</button>
            <button class="text-white p-1 bg-red-700 rounded-lg" onclick="deleteTodo(${index})">Delete</button>
            <button class="text-white mx-2 p-1 bg-green-700 rounded-lg"><input onclick="completeTodo(${index})" type="checkbox">Completed</button>
        `
       todoList.appendChild(list)
    })
}

function saveTodosToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos)); 
}

window.onload = function() {
    renderTodos();
}



//there are still a few features missing to fully meet the task requirements. Consider adding the functionality to mark tasks as completed and move them to a separate section. Additionally, implementing a filter feature to view tasks based on priority, due date, or completion status would enhance the app's usability. Lastly, to ensure tasks persist after a page reload, you might want to look into using localStorage. Keep up the good work! 😊