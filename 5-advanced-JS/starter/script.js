// Function constructor

var john = {
    name: 'John',
    birthYear: 1989,
    job: 'teacher'
};

var Person = function(name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
};

Person.prototype.calculateAge = function(){
    console.log(2019 - this.birthYear);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1989, 'teacher');

var jane = new Person('Jane', 1990, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

Object.create method

var personProto = {
    calculateAge: function() {
        console.log(2019 - this.birthYear);
    }
}
john.name = 'John';
john.birthYear = 1989;
john.job = 'teacher';

var john = Object.create(personProto);

var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    birthYear: {value: 1990},
    job: {value: 'designer'}
});


// Primitives vs objects

// Primitives
var a = 89;
var b = a;
a = 42;

console.log(a);
console.log(b);

// Objects
var obj1 = {
    name: 'John',
    age: 29
};

var obj2 = obj1;
obj1.age = 30;

// No copy was created, just references in. memory
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 31;
var obj = {
    name: 'Jon',
    city: 'Winterfell'
};

function change(a, b){
    a = 30;
    b.city = 'King\'s Landing'
};

change(age, obj);
console.log(age);
console.log(obj.city);

