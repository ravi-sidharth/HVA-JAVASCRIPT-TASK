function areaOfRectangle(length,width) {
    let area = length*width
    return area
}

function areaOfCircle(radius) {
    let area = Math.PI *radius**2
    return area
}

function areaOfTriangle(base,height) {
    let area = 0.5*base*height
    return area
}

function calculatePaintingCost(dimension1,dimension2,calculateArea) {
    const area= calculateArea(dimension1,dimension2)
    const costPerUnit= 180
    const totalCost=area*costPerUnit
    return totalCost

}

console.log(calculatePaintingCost(5,10,areaOfRectangle))
console.log(calculatePaintingCost(3,null,areaOfCircle))
console.log(calculatePaintingCost(6,8,areaOfTriangle))

