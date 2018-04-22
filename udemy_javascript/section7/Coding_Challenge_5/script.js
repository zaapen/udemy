class Town {
	constructor(name, buildYear) {
		this.name = name;
		this.buildYear = buildYear;
	}
}

class Park extends Town {
	constructor(name, buildYear, numTrees, parkArea) {
		super(name, buildYear);
		this.numTrees = numTrees;
		this.parkArea = parkArea;		
	}

	calcDensity() {
		var density = this.numTrees / this.parkArea;
		console.log(`${this.name} has a density of ${density} trees per square miles.`)
	}
}

class Street extends Town {
	constructor(name, buildYear, length, size = 3) {
		super(name, buildYear);
		this.length = length;
		this.size = size;
	}

	classifyStreet() {
		const classification = new Map();
		classification.set(1, 'tiny');
		classification.set(2, 'small');
		classification.set(3, 'normal');
		classification.set(4, 'big');
		classification.set(5, 'huge');
		console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
	}
}


var firstPark = new Park('First Park', 1950, 200, 2000);
var secondPark = new Park('Second Park', 1955, 1500, 4000);
var thirdPark = new Park('Third Park', 1975, 400, 3000);

var firstStreet = new Street('1st ST', 1960, 10, 1);
var secondStreet = new Street('2nd ST', 1970, 5, 2);
var thirdStreet = new Street('3rd ST', 1980, 15);
var fourthStreet = new Street('4th ST', 1990, 20, 5);

var allParks = [firstPark, secondPark, thirdPark];
var allStreets = [firstStreet, secondStreet, thirdStreet, fourthStreet];

function calculateAvg(arr) {
	var sum = 0;
	var average = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	average = sum / arr.length;
	return [sum, average];
}

function parkReport(park) {
	console.log('----Park Report----');
	//Tree Density
	park.forEach(el => el.calcDensity());

	//Average Age
	const ages = park.map(el => new Date().getFullYear() - el.buildYear);
	const [totalAge, avgAge] = calculateAvg(ages);
	console.log(`Our town has ${park.length} parks total and has an average age of ${avgAge}.`)


	// Name of the park that has more than 1000 trees
	const manyTree = park.map(el => el.numTrees).findIndex(el => el >= 1000);

	console.log(`${park[manyTree].name} has more than 1000 trees.`);

}

function streetReport(st) {
	console.log('----Street Report----');

	// Average street length
	const length = st.map(el => el.length);
	const [totalLength, avgLength] = calculateAvg(length);
	console.log(`Our ${st.length} streets has a total distance of ${totalLength} miles and an average distance of ${avgLength} miles.`);

	// City classification
	st.forEach(el => el.classifyStreet());
}


parkReport(allParks);
streetReport(allStreets);

