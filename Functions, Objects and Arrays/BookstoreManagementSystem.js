//Define the Array of inventory Items:

const inventory = [
    {id:1, title:"HTML se DSA", author:"Nikhil Patre",price:"499", quantity:"50"},
    {id:2, title:"CSS", author:"Shivam Mishra",price:"999", quantity:"50"},
    {id:3, title:"Javascript", author:"brendan Eich ",price:"3999", quantity:"50"},
    {id:4, title:"React", author:"Vishal Rathore",price:"1999", quantity:"50"}
]

// b. Create the Book Class:
class Book {
    constructor(id,title,author,price,quantity) {
        this.id=id;
        this.title=title;
        this.author=author;
        this.price=price;
        this.quantity=quantity;
    }
}

//c. Define the displayBooks Functions:
function displayBooks() {
    inventory.forEach((element)=> {
        console.log(element)
    })
}
// displayBooks()


//d. Define the addBook Function: 
function addBook(id,title,author,price,quantity) {
    const newBook = new Book(id,title,author,price,quantity)
    inventory.push(newBook)
}
addBook(99,"abc","Ravi",999,5)
// console.log(inventory);

//e. Define the updateBook Function:
function updateBook(id,quantity) {
    inventory.find( (element)=> {
        if(element.id==id) {
            element.quantity=quantity
        }
    })
}

// updateBook(3,89087)
// console.log(inventory);

function updateBookWithMap(id,quantity) {
    inventory.map( (element)=> {
        if(element.id==id) {
            element.quantity=quantity
        }
    })
}

// updateBookWithMap(4,87)
// console.log(inventory);


// f. define the removeBook Function: 
const newArray=[]
function removeBook(id) {
    inventory.filter( (element)=> {
        if (element.id != id) {
            newArray.push(element)
        }
    })
}
// removeBook(99)
// console.log(newArray);
