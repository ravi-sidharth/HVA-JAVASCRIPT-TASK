//a. Define the Array of Expense:

const Expenses = [
    {id:1, name:"Ice-cream",amount:50,date:"05/08/2024"},
    {id:2, name:"Paneer",amount:100,date:"08/08/2024"},
    {id:3, name:"chocolate",amount:70,date:"10/08/2024"},
    {id:4, name:"buscuits",amount:20,date:"12/08/2024"},
]

//b. Create the Expense Class:
class Expense {
    constructor(id,name,amount,date) {
        this.id=id;
        this.name=name;
        this.amount=amount;
        this.date=date;
    }
}

//c. Define the displayExpenses Function:
function displayExpenses(){
    Expenses.forEach((expense)=> {
        console.log(expense.name,"-",expense.amount,"(",expense.date,")")
    })
}
// displayExpenses()

//d. Define the addExpense Function:
function addExpense(id,name,amount,date) {
    let element = new Expense(id,name,amount,date)
    Expenses.push(element)
}
addExpense(5,"Peanut-butter",299,"15/08/2024")
// console.log(expenses)

//e. Define the updateExpense Function:
function updateExpense(id,amount) {
    Expenses.find((expense)=> {
        if (expense.id==id) {
            expense.amount=amount
        }
    })
}

// updateExpense(2,200)
// console.log(Expenses)

function updateExpenseWithMap(id,amount) {
    Expenses.map((expense)=> {
        if(expense.id ==id) {
            expense.amount=amount
        }
     })
}
// updateExpenseWithMap(3,3000)
// console.log(Expenses)

// f. Define the removeExpense Function:
const newArray=[]
function removeExpense(id){
    Expenses.filter((expense)=> {
        if(expense.id!=id ) {
            newArray.push(expense)
        }
    })
}

removeExpense(3)
console.log(newArray);
