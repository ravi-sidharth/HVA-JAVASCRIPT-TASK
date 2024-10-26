// Greet Function: 

function greet(name) {
    return "Hello, "+ name+ "!";
}
const result = greet("Ravi")
console.log(result)

// GreetDefault Function: 

function greetDefault(name="Guest") {
    return "Hello, "+ name + "!"
}
const result1=greetDefault()
console.log(result1);

// Rewrite Greet as an Function Expression:

const greetFunction =function(name) {
    return "Hello, "+ name + "!"
}
const result2 =greetFunction("Deepak")
console.log(result2);

// Rewrite Greet as an Arrow Function:

const greetArrow1 =(name) => `Hello, ${name}!`
const result3 =greetArrow1("Sandeep")
console.log(result3);


const greetArrow2 =(name) => {
    return {Greet:`Hello`, Name:`${name}!`}
} 
const result4 =greetArrow2("Sandeep")
console.log(result4);