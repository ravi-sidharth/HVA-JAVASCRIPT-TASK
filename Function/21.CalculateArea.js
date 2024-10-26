//a. Calculate Area Function
function calculateArea(width,height) {
    const areaOfRectangle=width *height
    return areaOfRectangle
}
const areaOfRectangle1=calculateArea(5,10)
console.log(areaOfRectangle1)

// b. Modify Calculate Area Function with Default Values:
function calculateAreaWithDefault(width=1,height=1) {
    const areaOfRectangle=width *height
    return areaOfRectangle
}
const areaOfRectangle11=calculateAreaWithDefault()
console.log(areaOfRectangle11);

const areaOfRectangle2=calculateAreaWithDefault(5,10)
console.log(areaOfRectangle2)

// c.Rewrite Area as a Function Expression:
const calculateAreaFunction= function calculateArea(width,height) {
    const areaOfRectangle=width *height
    return areaOfRectangle
}
const areaOfRectangle3=calculateAreaFunction(5,10)
console.log(areaOfRectangle3)

// d. Rewrite Calculate Area as an Arrow Function:
const calculateAreaArrow=(width,height) =>width*height

const areaOfRectangle=calculateAreaArrow(5,10)
console.log(areaOfRectangle)