// Lecture: Hoisting

// functions
calculateAge(1965)

function calculateAge(year) {
	console.log(2016 - year);
}


// retirement(1956);
var retirement = function(year) {
	console.log(65 - (2016 - year));
}

// Variables

var age = 23;
console.log(age);

function foo() {
	var age = 65;
	console.log(age);
}

foo();
console.log(age);

