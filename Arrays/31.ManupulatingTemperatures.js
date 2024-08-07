// Define and Initialize the Array:
const temperatures = [-3,14,22,5,-10]

// b. Iterate and Log Using forEach():

function Item(nums) {
	console.log(nums)
	}
	
temperatures.forEach(Item)

let item = (nums) => {
	console.log(nums)
	}
	
temperatures.forEach(item)

//b. Iterate and Log Using forEach():

temperatures.forEach( function(nums) {
	console.log(nums)
	})
temperatures.forEach ( nums => console.log(nums))

temperatures.forEach ( function(nums) {
	console.log((nums*9/5)+32)
	})
	
temperatures.forEach ( nums => console.log((nums*9/5)+32) ) 


//c. Iterate and Create a New Modified Array Using map():

const temperaturesInFahrenheit = []

temperatures.map(function(nums) {
	return temperaturesInFahrenheit.push((nums*9/5)+32)
	})
console.log(temperaturesInFahrenheit)


temperatures.map(nums => {
	return temperaturesInFahrenheit.push((nums*9/5)+32)
	})
console.log(temperaturesInFahrenheit)


//d. Iterate and Create a New Filtered Array Using filter():

let belowFreezing = temperatures.filter(function(temp) {
	 return (temp<0)
	})
console.log(belowFreezing)

belowFreezing = temperatures.filter((temp) => (temp <0) )
console.log(belowFreezing)
