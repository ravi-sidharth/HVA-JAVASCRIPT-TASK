class Employee {
	constructor(name,email,age,department,position,salary) {
		this.name=name
		this.email=email
		this.age=age
		this.department=department
		this.position=position
		this.salary=salary
	}
	
	
	

	
	greet() {
		console.log(`Hello, I am ${this.name}, ${this.position}`)
	   }
	   
	displaySalary() {
		console.log(`Salary:$ ${this.salary}`)
                }
}
     	const newEmployee =new Employee("Ravi","ravi23@ai",23,"5 Unit","soft developer", 8000) 
     			console.log(newEmployee)
     			
     			
     	const manager=new Employee("Ravi","ravi23@ai",23,"5 Unit","senior manager developer", 80000) 
     			console.log(manager)
                         
	newEmployee.greet() 
	newEmployee.displaySalary()
	
	manager.greet()
	manager.displaySalary()
	




