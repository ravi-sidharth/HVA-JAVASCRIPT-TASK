//a. Define and initialize the Array:

const fruits = ["apple", "banana","cherry","date"]

//b. Iterate and Log Using forEach():

fruits.forEach (function(fruit) {
	console.log(fruit)
	})

fruits.forEach ( (fruits) => console.log(fruits) )

//c. Calculate Total Characters Using forEach()

let totalCharacters=0

fruits.forEach(function(fruit) {
	for (let i=0; i<fruit.length; i++) {
		totalCharacters+=1
	}
})
console.log(totalCharacters)


//d. Iterate and Create a New Modified Array Using map():

let reversedFruits =[];
let j=0;
fruits.map(function(fruit) {
	
	let reversed ="";
	for ( let i=fruit.length-1; i>=0; i--) {
		reversed+=fruit[i];
		}
	reversedFruits[j]=reversed;
	j+=1;
	
	return reversedFruits;
})
console.log(reversedFruits);

j=0
fruits.map((fruit) => {
	let reversed ="";
	for (let i=fruit.length-1; i>=0; i--) {
		reversed+=fruit[i];
		}
	reversedFruits[j]=reversed;
	j+=1;
	
	return reversedFruits;
})
console.log(reversedFruits);

// e. Iterate and Create a New Filtered Array Using filter():

let longFruits = []

fruits.filter(function(fruit) {
	count=0
	for (let i=0; i<fruit.length; i++) {
		count+=1
		}
		
	if (count>5) {
		longFruits.push(fruit)
		}
return longFruits;
})
console.log(longFruits)
	
longFruits = []
fruits.filter((fruit) => {
	count=0
	for (let i=0; i<fruit.length; i++) {
		count+=1
		}
		
	if (count>5) {
		longFruits.push(fruit)
		}
return longFruits;
})
console.log(longFruits)
	


//f. Create a New Filtered and Modified Array using filter() and map():

const aFruitsUpper=[]
fruits.filter (function(fruit) {
	for (let i=0; i<fruit.length; i++) {
		if (fruit[i]=='a'){
			aFruitsUpper.push(fruit)
			break
			}
		}
	aFruitsUpper.map( function(fruit) {
			aFruitsUpper=UpperCase(fruit)
			})
	
})

















































