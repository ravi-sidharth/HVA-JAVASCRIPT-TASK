function higherOrderFunction(num,callback) {
    callback(num)
}

function callbackFunction(number) {
    console.log(number);
}
higherOrderFunction(5,callbackFunction)


// function expression as callback
const call=function callbackFunction(number) {
    console.log(number);
}
higherOrderFunction(244,call)

// function expression Log square of the number:
const square=function callbackFunction(number) {
    console.log(number**2);
}
higherOrderFunction(9,square)


// Callback ro Log of Two Numbers:

function newHigherOrderFunction(num1,num2,callback) {
    callback(num1,num2)
}

const sumOfTwoNumber = function callback(number1,number2) {
    console.log(number1+number2)
}
newHigherOrderFunction(3,7,sumOfTwoNumber)