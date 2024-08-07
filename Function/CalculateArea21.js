// //a. Calculate Area Function
// function calculateArea(width,height) {
//     const areaOfRectangle=width *height
//     return areaOfRectangle
// }
// const areaOfRectangle=calculateArea(5,10)
// console.log(areaOfRectangle)

//b. Modify Calculate Area Function with Default Values:
// function calculateAreaWithDefault(width=1,height=1) {
//     const areaOfRectangle=width *height
//     return areaOfRectangle
// }
// // const areaOfRectangle=calculateAreaWithDefault()
// const areaOfRectangle=calculateAreaWithDefault(5,10)
// console.log(areaOfRectangle)

// c.Rewrite Area as a Function Expression:
// const calculateAreaFunction= function calculateArea(width,height) {
//     const areaOfRectangle=width *height
//     return areaOfRectangle
// }
// const areaOfRectangle=calculateAreaFunction(5,10)
// console.log(areaOfRectangle)

// d. Rewrite Calculate Area as an Arrow Function:
const calculateAreaArrow=(width,height) =>width*height

const areaOfRectangle=calculateAreaArrow(5,10)
console.log(areaOfRectangle)