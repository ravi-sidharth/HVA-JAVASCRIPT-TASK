// const student = {
//     name:"Ravi",
//     email:"thenewravy@gmail.com",
//     age:21,
//     greet: function() {
//         console.log(`Hello,${this.name}!`)
//     },
  
//     // doubt 
//     greet() {
//         console.log(`Hello,${this.name}!`)
//     },

//     address:{
//         country:"Delhi",
//         city:"Kalyanpuri",
//         pin_code:110091,

//     }
  

// }
// console.log(student['name']);

// student.age= 10
// console.log(student.age)

// // student.greet()
// student.greet()

// console.log(student.address.country)
// student.address.pin_code=1234334
// console.log(student['address']['pin_code'])


// const friend = {
//     friendName:"Rahul",
//     email:"rahul@google",
//     age:22,
//     address:{
//         country:"Delhi",
//         city:"Kalyanpuri",
//         pin_code:110091,

//     },
//     greet(){
//         console.log(`Hello ${this.friendName}`)
//     }
// }
// friend.greet()


// const topper = {
//     name:"Vishal Rathore",
//     email:"vishal.ai",
//     age:24,
//     address:{
//         country:"Agra",
//         city:"Priya Nagar",
//         pin_code:100303,
//     },
//     greet() {
//         console.log(`Hello,${this.name}!`)
//     },
// }


// topper.greet()


class Student {
    constructor(name,email,age,country,city,pin_code) {
        this.name=name;
        this.email=email;
        this.age=age;
        this.address= {
            country:country,
            city:city,
            pin_code:pin_code
        }
   

    }

    greet(){
        return (`Hello, ${this.name}!`)
    }

    getfullAddress() {
        const {country,city,pin_code} =this.address;
        return `${country}, ${city}-${pin_code}`
    }


}

let myData = new Student("ravi","@ravi",21,"india","dharamshala",17056)
console.log(myData);


let friend = new Student ("Rahul","rahul.ai",22,"india","Kalyanpuri",110091)
console.log(friend)

let another_student = new Student ("Deepak","deepak.chatgpt",23,"india","Kanpur",140532)
console.log(another_student)

console.log(myData.greet());
console.log(friend.greet());
console.log(another_student.greet());




console.log(myData.getfullAddress())
console.log(friend.getfullAddress());
console.log(another_student.getfullAddress());


