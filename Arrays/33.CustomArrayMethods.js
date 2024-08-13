//a. forEachArray Function:
function forEachArray(array,callback) {
		callback(array)
		}
	function callbackEach(array) {
		for (let i=0; i<array.length; i++) {
			console.log(array[i])
	}
}
// forEachArray([1,2,4,5,6,7,7],callback)


// b. mapArray Function: 
function mapArray(array,callback) {
	callback(array)
}
let newArray=[] 
function callbackMap(array) {
	for (let i=0; i<array.length; i++) {
			return array[i]
}
}
// mapArray([1,2,4,5,6,7,7],callbackMap)

//c filterArray Function:
function filterArray(array,callback) {
	callback(array)
}
newArray=[] 
function callbackFilter(array) {
	for (let i=0; i<array.length; i++) {
		if (array[i]>5) {
			console.log(array[i])
		}
}
}
// filterArray([1,2,4,5,6,7,7],callbackFilter)
