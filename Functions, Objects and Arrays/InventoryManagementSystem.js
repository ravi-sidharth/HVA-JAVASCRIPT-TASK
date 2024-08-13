//a. Define the Array of inventory Items:
const inventory = [
    {id:1, name:"building",price:9000,quantity:5},
    {id:2, name:"Furniture",price:7000,quantity:10},
    {id:3, name:"machine",price:900,quantity:20},
    {id:4, name:"Car",price:2500,quantity:10},

]

//b. Create the Products Class:
class Product {
    constructor(id,name,price,quantity) {
        this.id=id;
        this.name=name;
        this.price=price;
        this.quantity=quantity;
    }
}
// c. Define the displayProducts Function:
function displayProducts() {
    inventory.forEach( (item)=>{
        console.log(item.name,"-",item.price*item.quantity)
    })
}

//d. Define the addProduct Function:
function addProduct(id,name,price,quantity) {
    const data = new Product(id,name,price,quantity)
    inventory.push(data)
}
addProduct(7,"Hero",999,4)
// console.log(inventory)

//e. Define the updateProduct function:
function updateProduct(id,quantity) {
    inventory.find((product)=>{
       if(product.id ==id) {
        product.quantity=quantity
       }
    })

}

updateProduct(2,4)
console.log(inventory)

function updateProductWithMap(id,quantity) {
    inventory.map((Product)=> {
        if (Product.id==id) {
            Product.quantity+=quantity
        }
    })
}

updateProductWithMap(1,9)
// console.log(inventory)

//f. Define the removeProduct Function:
const newArray=[]
function removeProduct(id) {
    inventory.filter((product)=> {
       if (product.id != id) {
            newArray.push(product)
       }
        
    })
}

removeProduct(3)
// console.log(newArray)
