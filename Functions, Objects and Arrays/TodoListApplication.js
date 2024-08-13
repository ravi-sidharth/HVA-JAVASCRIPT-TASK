//a. Define the Array of Tasks:
const Tasks = [
    {id:1, desription:"Web Development", dueDate:"30/08/2024", status:"running"},
    {id:2, desription:"Function", dueDate:"10/08/2024", status:"Completed"},
    {id:3, desription:"Object", dueDate:"15/08/2024", status:"Start"},
    {id:4, desription:"Class", dueDate:"/08/2024", status:"Start"}

]

//b. Create the Task Class: 
class Task {
    constructor(id,desription,dueDate,status) {
        this.id = id;
        this.desription=desription;
        this.dueDate=dueDate;
        this.status=status;
    }
}

//c. Define the displayTasks Function :
function displayTasks() {
    Tasks.forEach((task) => {
        console.log(`${task.desription}-${task.dueDate}(${task.status})`)
    })
}
displayTasks()

//d. Define the displayTasks Function:
function addTask(id,desription,dueDate,status) {
    const newTask = new Task(id,desription,dueDate,status)
    Tasks.push(newTask)
}
addTask(7,"meditation","15/08/2024","coming soon")
// console.log(Tasks)

//e. Define the updateTask Function:
function updateTask(id,status) {
    Tasks.find( (task)=> {
        if(task.id==id) {
            return task.status=status
        }
    })
}

updateTask(3,"done")
// console.log(Tasks)


function updateTaskWithMap(id,status) {
    Tasks.map( (task)=> {
        if(task.id==id) {
            return task.status=status
        }
    })
}

updateTask(1,"backlog")
// console.log(Tasks)

//f. Define the removeTask Function:
const newArray= []
function removeTask(id) {
    Tasks.filter( (task) => {
        if( task.id!=id) {
            newArray.push(task)
        }
    })
   
}

// removeTask(1)
// console.log(newArray)