function doubleNumber(number) {
    return 2*number
}
function squareNumber(number) {
    return number**2
}
function increamentNumber(number) {
    return number+=1
}
function performOperation(num,operation) {
   return operation(num)
}
console.log(performOperation(5,doubleNumber))
console.log(performOperation(5,squareNumber))
console.log(performOperation(5,increamentNumber))
