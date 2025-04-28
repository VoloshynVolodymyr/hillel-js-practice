const person = {
	firstName: 'John',
	lastName: 'Snow',
	age: 20,
};

person.email = 'lordCommander@nightwatch.com';

delete person.age;

console.log(person);
