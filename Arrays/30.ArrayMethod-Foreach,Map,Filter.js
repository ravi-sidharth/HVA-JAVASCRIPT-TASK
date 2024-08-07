// a. Define and initialize the Array:
let numbers = [1,2,3,4,5]

// b.Iterate and Log Using forEach()

numbers.forEach(function(nums){ 
	console.log(nums)
	})

	
numbers.forEach(function(nums) {
	 console.log(nums*2)
	})

	

let squareNumbers = numbers.map(function(nums) {
   return (nums**2)
  })
  
 
console.log(squareNumbers)

squareNumbers = numbers.map( (nums) => {
	let result= (nums**2)
	return result 
	})

console.log(squareNumbers)


let evenNumbers=[]
let even = numbers.filter((nums)=> {
	if (nums%2==0) {
		evenNumbers.push(nums)
		}
	})

console.log(evenNumbers)


even= numbers.filter(nums=> { 
	if (nums%2==0) {
		evenNumbers.push(nums)
	}
})

console.log(evenNumbers)
