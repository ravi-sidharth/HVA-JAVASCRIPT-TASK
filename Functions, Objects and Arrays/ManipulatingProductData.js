//a. Define the Array of Products:
const products = [
    {id:1,name:"Cashew",price:900, category:"Food"},
    {id:1,name:"Almond",price:1200, category:"Food"},
    {id:1,name:"Shampoo",price:330, category:"Non Food"},
    {id:1,name:"Face wash",price:400, category:"Non Food"}

];


//b. Define the displayProducts Function:
function displayProducts(array) {
    array.forEach((product)=> {
        console.log(product.name+"- $"+ product.price);
        
    })
}

//c. Calculator and Display Products with tasx:
const productsWithTax= products.map((product)=>({
    id:product.id,
    name:product.name,
    category:product.category,
    priceWithTax:product.price+product.price*0.1
}))

displayProducts(productsWithTax)  //jab isko ham call kr rahe he to hamara price undefined aa rha he 

//d. Filter and Display Food products:
const foodProducts = products.filter((product)=> {
        if (product.category=="Food") {
            return product
        }
})

console.log(foodProducts)

//e. Find Affordable Products:
const AffordableProducts = products.filter ((product) => product.price <700)

const affordableProductsStrings=AffordableProducts.map((product)=>{
    return (`${product.name}- $${product.price}`)
} )

console.log(affordableProductsStrings)


//f. Calculate Total Price:
let totalPrice =0
products.forEach( (product)=>{
    totalPrice+=product.price
})

console.log(totalPrice)