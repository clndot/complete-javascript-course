///////////////////////////////////////
// Lecture: Hoisting

calculateAge(1989);


function calculateAge(birthYear) {
    console.log(2019 - birthYear);
}

calculateAge(1990);

// Doesn't work because below is a function expression
// yearsUntilRetirement(1990);

var yearsUntilRetirement = function(birthYear) {
    console.log(65 - (2019 - birthYear));
}

yearsUntilRetirement(1990);

// variables
console.log(age);
var age = 28;
console.log(age);

function foo(){
    var age = 33;
    console.log(age);
}

foo();
console.log(age);

///////////////////////////////////////
// Lecture: Scoping


// First scoping example


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

function fourth() {
    var d = 'John';
    console.log(a + d);
}


// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

console.log(this);

// calculateAge(1989);

// function calculateAge(birthYear) {
//     console.log(2019 - birthYear);
//     console.log(this);
// }

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1989,
    calculateAge: function(){
        console.log(this);
        console.log(2019 - this.birthYear);

        // function innerFunction(){
        //     console.log(this);
        // }
        // innerFunction();
    }
}

john.calculateAge();

var mark = {
    firstName: 'Mark',
    birthYear: 1984
}

mark.calculateAge = john.calculateAge;
mark.calculateAge();


