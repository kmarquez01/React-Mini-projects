const score = 50; //constant

let rice = 1; //can change value by updating

rice = 30;

console.log('I eat noodles');

console.log(score);

console.log(rice);

const name = "Kirby";

const age = 19;

const rating = 4.5;

const isCool = true;

const x = null;

const y = undefined; //or let y; is also undefined

const list = "technology, computers, IT, code";

console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);

alert("Brother is whack");

const greeting = `My name is ${name} and I am ${age}`

//Or the older way which is "My name is" + name + " and I am " + age;

console.log(greeting);

console.log(greeting.length);

console.log(greeting.toUpperCase());

console.log(greeting.toLowerCase());

console.log(greeting.substring(0,17));

console.log(greeting.substring(0,17).toUpperCase());

console.log(list.split(", "));

const fruits = ["apples", "oranges", "banana", 10, true];

console.log(fruits);

console.log(fruits[1]);

fruits.push("grapes");

console.log(fruits);

fruits.unshift("mango");

console.log(fruits);

fruits.pop();

console.log(fruits);

console.log(Array.isArray("grapes"));

console.log(fruits.indexOf("oranges"));

const person = {

	firstname: "Kirby",

	lastname: "Marquez",

	age: 19,

	hobbies: ["dance", "video games", "piano"],

	address: {
		street: "my street",

		city: "Vancouver",

		province: "BC"
	}
}

console.log(person);

console.log(person.firstname, person.lastname);

console.log(person.hobbies[1]);

console.log(person.address.city);

const { firstname, lastname, address:{city} } = person;

console.log(firstname, city);

const todos = [

	{
		id: 1,

		text: "Go for a run",

		isCompleted: false
	},

	{
		id: 2,

		text: "Learn Javascript",

		isCompleted: true
	},

	{
		id: 3,

		text: "Finish website layout",

		isCompleted: true
	}
];

console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);

console.log(todoJSON);

for(let x of todos){
	console.log(x);
	console.log(x.text);
	console.log(x.id);
}

todos.forEach(function(x){

	console.log(x.text);

});

const todoText = todos.map(function(x){
	return x.text;
});

console.log(todoText);

//constructor function

/*function Person(firstName, lastName, dob){
	this.firstname = firstName;
	this.lastname = lastName;
	this.dob = new Date(dob);

}

Person.prototype.getfullname = function(){
	return `${this.firstname} ${this.lastname}`;
} */

class Person{
	constructor(firstName, lastName, dob)
	{
		this.firstname = firstName;
		this.lastname = lastName;
		this.dob = new Date(dob);
	}

	getfullname()
	{
		return `${this.firstname} ${this.lastname}`;
	}
}

//Instantiate the object

const person1 = new Person("Kirby", "Marquez", "04-15-2001");
const person2 = new Person("Euncice", "Kim", "06-06-2000");

console.log(person1);

console.log(person2);

console.log(person1.getfullname());
