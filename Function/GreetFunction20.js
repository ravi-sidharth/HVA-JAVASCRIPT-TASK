// Greet Function: 

// function greet(name) {
//     return "Hello, "+ name+ "!";
// }
// const result = greet("Ravi")
// console.log(result)

// GreetDefault Function: 

// function greetDefault(name="Guest") {
//     return "Hello, "+ name + "!"
// }
// const result=greetDefault()
// console.log(result);

// Rewrite Greet as an Function Expression:

const greetFunction =function(name) {
    return "Hello, "+ name + "!"
}
const result =greetFunction("Deepak")
console.log(result);

// Rewrite Greet as an Arrow Function:

// const greetArrow =(name) => `Hello, ${name}!`
// const result =greetArrow("Sandeep")
// console.log(result);


// const greetArrow =(name) => {
    
//     return {Greet:`Hello`, Name:`${name}!`}
// } 
// const result =greetArrow("Sandeep")
// console.log(result);