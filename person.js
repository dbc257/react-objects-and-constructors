// Given this code:

function Person(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
}

Person.prototype.greet = function(other) {
    console.log('Hello ' + other.name + ', I am ' + this.name + '!');
};
const theGroup = [
new Person('Sonny', 'sonny@hotmail.com', '483-485-4948'),
new Person('Jordan', 'jordan@aol.com', '495-586-3456')
]
// console.log(theGroup)

// Write code to:

// Instantiate an instance object of Person with name of 'Sonny', email of 'sonny@hotmail.com', and phone of '483-485-4948', 
// store it in the variable sonny.
const sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948')
// console.log(sonny)

// Instantiate another person with the name of 'Jordan', email of 'jordan@aol.com', and phone of '495-586-3456', 
// store it in the variable 'jordan'.
const jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456')
// console.log(jordan)

// Have sonny greet jordan using the greet method.
sonny.greet(jordan)

// Have jordan greet sonny using the greet method.
jordan.greet(sonny)

// Write a statement to print the contact info (email and phone) of Sonny.
console.log()
// Write another statement to print the contact info of Jordan.

// theGroup.forEach((other) => {
//     let j = other.name.
//     j.greet(theGroup[i])
    // name.greet(theGroup[1])
    // name.greet(theGroup[0])
    // other.name.greet(this.name)
// })