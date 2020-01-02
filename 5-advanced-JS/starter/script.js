//////////////////////////////
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

// Object.create method

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

//////////////////////////////
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

// No copy was created, just references in memory
console.log(obj1.age);
console.log(obj2.age);

//////////////////////////////
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

//////////////////////////////
// Passing functions as arguments

var years = [1990, 1960, 1978, 1989];

function arrayCalc(arr, fn){
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2019 - el;
}

function isLegalAge(el) {
    return el >= 21;
}

function maxHeartRate(el) {
    if(el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var legalAges = arrayCalc(ages, isLegalAge);
console.log(legalAges);

var maxHeartRates = arrayCalc(ages, maxHeartRate);
console.log(maxHeartRates);

//////////////////////////////
// Functions returning functions

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log(name + ', what subject do you teach?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Mark');
designerQuestion('Jane');

interviewQuestion('teacher')('Moose');

//////////////////////////////
// IIFE overview

function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

//////////////////////////////
// Closures

function retirement(retirementAge) {
    return function(birthYear) {
        var a = ' years left until retirement';
        var age = 2019 - birthYear;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1989);

retirement(65)(1989);

retirementGermany = retirement(65);
retirementIceland = retirement(67);

retirementGermany(1989);
retirementIceland(1989);


function interviewQuestions(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log(name + ', what subject do you teach?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var jane = interviewQuestions('designer');
jane('Jane');
interviewQuestions('teacher')('John');


//////////////////////////////
// Bind, call, and apply methods

var john = {
    name: 'John',
    age: 29,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.')
        } else if (style === 'friendly') {
            console.log('Hey there! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age +  ' years old. Have a nice ' + timeOfDay + '.')

        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');
// john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly')
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

var years = [1990, 1960, 1978, 1989];

function arrayCalc(arr, fn){
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2019 - el;
}

function isLegalAge(el, ageLimit) {
    return el >= ageLimit;
}


var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isLegalAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

(function() {
    var Question = function(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    };

    q1 = new Question('What is the capital city of New York?', ['Albany', 'New York City', 'Buffalo', 'Rochester'], 0);
    q2 = new Question('What is the capital city of Vermont?', ['Montpelier', 'Burlington', 'Middlebury', 'Brattleboro'], 0);
    q3 = new Question('What is the capital city of Texas?', ['Houston', 'Dallas', 'Austin', 'Arlington'], 2);
    q4 = new Question('What is the capital city of Nevada?', ['Las Vegas', 'Reno', 'Boulder City', 'Carson City'], 3);


    Question.prototype.checkAnswer = function(answer){
        var isCorrect = this.correctAnswer == answer;
        if(isCorrect) {
            console.log('That\'s the correct answer');
        } else {
            console.log('Sorry, wrong answer');
        }
    };

    questions = [q1, q2, q3]

    Question.prototype.showQuestion = function(){
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(this.answers[i]);
        }
    }

    var a = Math.floor(Math.random() * questions.length);

    questions[a].showQuestion();

    var answer = parseInt(prompt('Please select the correct answer.'));

    questions[a].checkAnswer(answer);
})();

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function() {
    var Question = function(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    };

    q1 = new Question('What is the capital city of New York?', ['Albany', 'New York City', 'Buffalo', 'Rochester'], 0);
    q2 = new Question('What is the capital city of Vermont?', ['Montpelier', 'Burlington', 'Middlebury', 'Brattleboro'], 0);
    q3 = new Question('What is the capital city of Texas?', ['Houston', 'Dallas', 'Austin', 'Arlington'], 2);
    q4 = new Question('What is the capital city of Nevada?', ['Las Vegas', 'Reno', 'Boulder City', 'Carson City'], 3);


    Question.prototype.checkAnswer = function(answer, cb){
        var score;
        var isCorrect = this.correctAnswer == answer;
        if(isCorrect) {
            console.log('That\'s the correct answer');
            score = cb(true);
        } else {
            console.log('Sorry, wrong answer');
            score = cb(false);
        }
        this.showScore(score);
    };

    questions = [q1, q2, q3];

    Question.prototype.showQuestion = function(){
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(this.answers[i]);
        }
    }

    Question.prototype.showScore = function(score){
        console.log('/////////////////////');
        console.log('// Score: ' + score);
    }

    function storeScore(){
        var score = 0;
        return function(correct) {
            if(correct) {
                score++;
            }
            return score;
        }
    }

    var storedScore = storeScore();

    function nextQuestion(){
        var a = Math.floor(Math.random() * questions.length);
        questions[a].showQuestion();
        var answer = prompt('Please select the correct answer.');

        if(answer !== 'exit') {
            var roundScore = questions[a].checkAnswer(parseInt(answer), storedScore);
            nextQuestion();
        }
    }

    nextQuestion();

})();



