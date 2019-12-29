/*
// Section one: variable names and data types


console.log("Hello, world!!!");

var firstName = "John";
console.log(firstName);

var lastName = "Smith";
var age = 28;
console.log(lastName);

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = "Teacher";
console.log(job);


// Variable naming rules
var _3years = 3;
var johnMark = "John and Mark";

console.log(age);
console.log(_3years, johnMark);
*/


/*
// Section two: variable mutation and type coercion

// Type coercion
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);


// Variable mutation
age = 'twenty eight';
job = 'Driver';
alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
var lastName = prompt('What is his last name?');

console.log(firstName + ' ' + lastName);

*/

/*
// Section three: basic operators

var currentYear, ageJohn, ageMark;
currentYear = 2019;
ageJohn = currentYear - 28;
ageMark = currentYear - 33;
console.log(ageJohn);

// Math operators
console.log(currentYear + 2);
console.log(currentYear * 2);
console.log(currentYear / 10);

// Logical operators
var isJohnOlder = ageJohn > ageMark;
console.log(isJohnOlder);

// typeof operator
console.log(typeof(isJohnOlder));
console.log(typeof(ageJohn));
console.log(typeof('Mark is older than John'));

var x;
console.log(typeof(x));

*/

/*
// Section four: operator precedence

var currentYear = 2019;
var yearJohn = 1989;
var legalAge = 21;

// Multiple operators
var isLegalAge = currentYear - yearJohn >= legalAge; // true
console.log(isLegalAge);

// Grouping
var ageJohn = currentYear - yearJohn;
var ageMark = 35;
var averageAge = (ageJohn + ageMark) / 2;

console.log(averageAge);

// Multiple assignments

var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

x *= 2;
console.log(x);

x += 10;
console.log(x);

x++;
console.log(x);

*/


/*
// Coding challenge 1


BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter)

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").



var massMark, massJohn, heightMark, heightJohn;
massMark = 88;
massJohn = 89;
heightJohn = 1.2;
heightMark = 1.1;

var bmiMark, bmiJohn;

function calculateBMI(mass, height) {
    return mass / (height * height);
}

bmiMark = calculateBMI(massMark, heightMark);
bmiJohn = calculateBMI(massJohn, heightJohn);

console.log(bmiMark, bmiJohn);
console.log("Is Mark's BMI higher than John's? " + bmiMark > bmiJohn);

*/

/*
// If: else, Decision making

var firstName = 'John';
var relationshipStatus = 'single';

if (relationshipStatus == 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon.');
}

var isMarried = false;

if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon.');
}

var massMark, massJohn, heightMark, heightJohn;
massMark = 88; // kg
massJohn = 89;
heightJohn = 1.2; // meters
heightMark = 1.1;

var bmiMark, bmiJohn;

function calculateBMI(mass, height) {
    return mass / (height * height);
}

bmiMark = calculateBMI(massMark, heightMark);
bmiJohn = calculateBMI(massJohn, heightJohn);

console.log(bmiMark, bmiJohn);
console.log("Is Mark's BMI higher than John's? " + bmiMark > bmiJohn);

if (bmiMark > bmiJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('Mark\'s BMI is lower than John\'s.');
}
*/


/*
// Boolean logic

var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age <= 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/

/*
// Ternary operator and switch statements

var firstName = 'John';
var age = 22;

age >= 21 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 21 ? 'beer' : 'juice';
console.log(drink);


var job = 'teacher';
switch(job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.');
        break
    case 'driver':
        console.log(firstName + ' drives an Uber.');
        break
    case 'designer':
        console.log(firstName + ' makes beautiful websites.');
        break
    default:
        console.log(firstName + ' does something else.');
}


switch(true) {
    case age > 13:
        console.log(firstName + ' is a boy.');
        break;
    case (age >= 13 && age < 20):
        console.log(firstName + ' is a teenager.');
        break;
    case (age >= 20 && age <= 30):
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}

*/

/*

// True and false values, equalitiy operators

var height;

height = 23;

if (height || height === 0) {
    console.log('Variable has been defined.');
} else {
    console.log('Variable has not been defined.');
}

if (height == '23') {
    console.log('The == does type coercion.');
}

*/


/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points,
while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score
    in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.
HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

/*
var aveTeamJohn, aveTeamMike, aveTeamMary;

aveTeamJohn = (89 + 120 + 103) / 3;
aveTeamMike = (116 + 94 + 123) / 3;
aveTeamMary = (97 + 134 + 105) / 3;

console.log(aveTeamJohn, aveTeamMike, aveTeamMary);

if (aveTeamJohn > aveTeamMike && aveTeamJohn > aveTeamMary) {
    console.log('John\'s team is the winner with: ' + aveTeamJohn);
} else if (aveTeamMike > aveTeamJohn && aveTeamMike > aveTeamMary) {
    console.log('Mike\'s team is the winner with: ' + aveTeamMike);
} else if (aveTeamMary > aveTeamMike && aveTeamMary > aveTeamJohn) {
    console.log('Mary\'s team is the winner with: ' + aveTeamMary);
} else {
    console.log('There\'s a draw.');
}
*/

/*
// Functions

function calculateAge(birthYear) {
    return 2019 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1989);
var ageJane = calculateAge(1992);

console.log(ageJohn, ageMike, ageJane);


function yearsUntilRetirement(birthYear, firstName) {
    var age = calculateAge(birthYear);

    if (age >= 65) {
        console.log(firstName + ' is of retirement age');
    } else {
        var retirementYears = 65 - age;
        console.log(firstName + ' retires in ' + retirementYears + ' years.');
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1989, 'Mike');
yearsUntilRetirement(1992, 'Jane');
*/

// // Function statements and declarations

// var currentOccupation = function(job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code.';
//         case 'driver':
//             return firstName + ' drives an Uber.'
//         case 'designer':
//             return firstName + ' makes beautiful websites.';
//         default:
//             return firstName + ' does something else.'
//     }
// }

// console.log(currentOccupation('teacher', 'John'));
// console.log(currentOccupation('designer', 'Jane'));
// console.log(currentOccupation('retired', 'Mike'));


// // Arrays

// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);

// console.log(names[0], names[1], names[2]);
// console.log(names);
// console.log(names.length);

// names[1] = 'Ben';
// console.log(names);

// names[names.length] = 'Mary';
// console.log(names);


// var john = ['John', 'Smith', 1990, 'teacher', false];
// john.push('blue');
// john.unshift('Mr.');

// console.log(john);

// john.pop();
// console.log(john);

// john.shift();
// console.log(john);

// console.log(john.indexOf(1990));

// var isJohnDesigner = john.indexOf('designer') === -1 ? 'John is not a designer.' : 'John is a designer';
// console.log(isJohnDesigner);

/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill
when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

// var tipCalculator;
// tipCalculator = function (bill) {
//     if (bill < 50) {
//         return bill * 20 / 100;
//     } else if (bill >= 50 && bill < 200) {
//         return bill * 15 / 100;
//     } else {
//         return bill * 10 / 100;
//     }
// };

// var bills;
// bills = [124, 48, 268];


// var allThreeTips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];
// var totalBill = [
//     bills[0] + allThreeTips[0],
//     bills[1] + allThreeTips[1],
//     bills[2] + allThreeTips[2]
// ];

// console.log(bills, allThreeTips, totalBill);

// Objects and properties

// Object literal
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1989,
//     family: ['Mary', 'James'],
//     job: 'teacher',
//     isMarried: false
// };

// console.log(john.firstName);
// console.log(john['lastName']);
// var x;
// x = 'birthYear';
// console.log(john[x]);

// john.job = 'designer';

// var jane;

// // New Object syntax
// jane = new Object();
// jane.firstName = 'Jane';
// jane.lastName = 'Smith';
// jane.birthYear = 1999;
// console.log(jane);

// Objects and methods

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1987,
//     family: ['Mary', 'James'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function (birthYear) {
//         this.age = 2019 - this.birthYear;
//     }
// };

// console.log(john);
// john.calcAge();
// console.log(john);

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality
    with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget
    they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/


// var john = {
//     fullName: 'John Smith',
//     mass: 100,
//     height: 1.2,
//     calculateBMI: function (mass, height) {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }

// var mark = {
//     fullName: 'Mark Black',
//     mass: 120,
//     height: 1.1,
//     calculateBMI: function(mass, height) {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }

// if (john.calculateBMI() > mark.calculateBMI()){
//     console.log('John has the higher BMI.');
// } else if (mark.calculateBMI() > john.calculateBMI()) {
//     console.log('Mark has the higher BMI.');
// } else {
//     console.log('They have the same BMI.')
// }


// Loops and iterations

// for loop
// for (var i = 1; i <= 20; i += 2) {
//     console.log(i);
// }


// var john = ['John', 'Smith', 1989, 'designer', false, 'blue'];
// for (var i = 0; i < john.length; i++) {
//     console.log(john[i]);
// }

// // while loop
// var i = 0;
// while (i < john.length) {
//     console.log(john[i]);
//     i++;
// }

// continue and break statements
// var john = ['John', 'Smith', 1989, 'designer', false, 'blue'];
// for (var i = 0; i < john.length; i++) {
//     if (typeof(john[i]) !== 'string') continue;
//     console.log(john[i]);
// }

// for (var i = 0; i < john.length; i++) {
//     if (typeof(john[i]) !== 'string') break;
//     console.log(john[i]);
// }

// // looping backwards
// for (var i = john.length - 1; i >= 0; i--) {
//     console.log(john[i]);
// }

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

var tipCalculator;
tipCalculator = function (bill) {
    if (bill < 50) {
        return bill * 20 / 100;
    } else if (bill >= 50 && bill < 200) {
        return bill * 15 / 100;
    } else {
        return bill * 10 / 100;
    }
};

var john = {
    bills: [124, 48, 180, 42],
    totalBills: [],
    tips: [],
    totalSum: 0,
    calculateTips: function(tips) {
        for (var i = 0; i < this.bills.length; i++) {
            this.tips[i] = tipCalculator(this.bills[i]);
            this.totalBills[i] = this.bills[i] + this.tips[i];
            this.totalSum += this.tips[i];
        }
    }
}

var tipCalculatorMark;
tipCalculatorMark = function (bill) {
    if (bill < 100) {
        return bill * 20 / 100;
    } else if (bill >= 100 && bill <= 300) {
        return bill * 10 / 100;
    } else {
        return bill * 25 / 100;
    }
};

function calculateAverageTip(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

var mark = {
    bills: [77, 375, 110, 45],
    totalBills: [],
    tips: [],
    totalSum: 0,
    calculateTips: function(tips) {
        for (var i = 0; i < this.bills.length; i++) {
            this.tips[i] = tipCalculatorMark(this.bills[i]);
            this.totalBills[i] = this.bills[i] + this.tips[i];
            this.totalSum += this.tips[i];
        }
    }
}


john.calculateTips();
mark.calculateTips();
console.log(john);
console.log(mark);

john.averageTip = calculateAverageTip(john.tips);
mark.averageTip = calculateAverageTip(mark.tips);

if (john.averageTip > mark.averageTip) {
    console.log('John\'s family paid a higher average tip.');
}  else if (mark.averageTip > john.averageTip) {
    console.log('Mark\'s family paid a higher average tip.');
} else {
    console.log('Both families had the same average tip.');
}
