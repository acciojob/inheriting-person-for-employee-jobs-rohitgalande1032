// complete this js code
function Person(name, age) {
	this.name = name;
	this.age = age;

	Person.prototype.greet = ()=> {
		return `Hello, my name is ${this.name}, I am ${this.age} years old.`;
	}
}

function Employee(name, age, jobTitle) {
	this.name = name;
	this.age = age;
	this.jobTitle = jobTitle;
	__proto__: Person;

	Employee.prototype.jobGreet = ()=> {
		return `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
	}
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

const person = new Person("Alice", 25);
const employee = new Employee("Bob", 30, "Manager");
console.log(person.greet());
console.log(employee.jobGreet());
