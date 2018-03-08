// Lecture Variable
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/
// Lecture Variable 2

/*
var name = 'John';
var age = 26;

console.log(name + age);
console.log(age + age);

var job, isMarried;

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty-six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

var lastName = prompt('What is the last name?');
console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');
*/
/*
var job = 'teacher';

job = prompt('What does John do?');

switch (job) {
	case 'teacher':
		console.log('John teaches kids.');
		break;
	case 'driver':
		console.log('John drives a cab.');
		break;
	case 'cop':
		console.log('John helps fight crime.');
		break;
	default:
		console.log('John does something else.');
		break;
}
*/

//Lecture Functions:

/*
function calculateAge(yearOfBirth) {
	var age = 2016 - yearOfBirth;
	return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);

function yearsUtilRetirement(name, yearOfBirth) {
	var age = calculateAge(yearOfBirth);
	var retirement = 65 - age;
	if (retirement >= 0) {
		console.log(name + ' retires in ' + retirement + ' years.');
	} else {
		console.log(name + ' is already retired.');
	}
}
yearsUtilRetirement('John', 1990);
yearsUtilRetirement('Mike', 1969);
yearsUtilRetirement('Mary', 1948);
*/

//lecture: Arrays
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);

names[1] = 'Ben';

console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();

console.log(john);

if (john.indexOf('teacher') === -1) {
	console.log('John is NOT a teacher.');
}
*/

// Lecture: Objects
/*
var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/

// Lecture: Objects and methods
// v1.0
/*
var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function() {
		return 2016 - this.yearOfBirth;
	}
};

// console.log(john.calculateAge(1990));
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);
*/

// v2.0
/*
var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function() {
		this.age = 2016 - this.yearOfBirth;
	}
};

john.calculateAge();
console.log(john);
*/

// Lecture: Loops

for (var i = 0; i < 10; i++) {
	console.log(i);
}

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

// for loops
/*
for (var i = 0; i < names.length; i++) {
	console.log(names[i]);
}

for (var i = names.length - 1; i >= 0; i--) {
	console.log(names[i]);
}
*/

// While loops
var i = 0;
while(i < names.length) {
	console.log(names[i]);
	i++;
}

for (var i = 1; i <= 5; i++) {
	console.log(i);

	if (i === 3) {
		break;
	}
}

for (var i = 1; i <= 5; i++) {
	if (i === 3) {
		continue;
	}
	console.log(i);
}






























