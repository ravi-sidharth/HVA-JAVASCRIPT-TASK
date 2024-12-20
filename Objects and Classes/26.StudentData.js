const student = {
    name:"Ravi",
    email:"thenewravy@gmail.com",
    age:21,

    greet() {
        console.log(`Hello,${this.name}!`)
    },

    address:{
        country:"Delhi",
        city:"Kalyanpuri",
        pin_code:110091,
    }
}
console.log(student['name']);

student.age= 10
console.log(student.age)

// student.greet()
student.greet()

console.log(student.address.country)
student.address.pin_code=1234334
console.log(student['address']['pin_code'])


const friend = {
    name:"Rahul",
    email:"rahul@google.com",
    age:22,
    address:{
        country:"Delhi",
        city:"Kalyanpuri",
        pin_code:110091,

    },
    greet(){
        console.log(`Hello ${this.name}`)
    }
}
friend.greet()


const topper = {
    name:"Vishal Rathore",
    email:"vishal.ai.com",
    age:24,
    address:{
        country:"Agra",
        city:"Priya Nagar",
        pin_code:100303,
    },
    greet() {
        console.log(`Hello,${this.name}!`)
    },
}


topper.greet()


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

    getFullAddress() {
        const {country,city,pin_code} =this.address;
        return `${country}, ${city}-${pin_code}`
    }
}

let myData = new Student("ravi","ravi@gmail.com",21,"india","dharamshala",17056)
console.log(myData);

let friends = new Student("Rahul","rahul@gmail.com",22,"india","Kalyanpuri",110091)
console.log(friends)

let another_student = new Student("Deepak","deepak@gmail.com",23,"india","Kanpur",140532)
console.log(another_student)

console.log(myData.greet());
console.log(friends.greet());
console.log(another_student.greet());

console.log(myData.getFullAddress())
console.log(friends.getFullAddress());
console.log(another_student.getFullAddress());

