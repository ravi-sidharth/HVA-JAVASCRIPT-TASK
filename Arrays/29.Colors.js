// a. Define and Log the colors Array:
colors = ["red", "blue", "black"]
console.log(colors[0])


// b. Modify and Add color elements:
colors[1]="yellow"
console.log(colors[1])

const lastColor= (colors.length)-1
colors[lastColor]="green"

console.log(colors[lastColor])

//c. Iterate using Loops over the colors Array:

//for loop 
for (i=0; i<colors.length; i++) {
	console.log(colors[i])
}


//While loop 
i=0
while (i<colors.length) {
	console.log(colors[i])
	i+=1
	}
	
//for...of loop
for (const color of colors) {
	console.log(color)
	}


//d Check Array Properties:
console.log(typeof(colors))
console.log(colors.length)

colors.push("aqua")
console.log(colors)
colors.pop()
console.log(colors)
console.log(colors.indexOf("blue"))
 



