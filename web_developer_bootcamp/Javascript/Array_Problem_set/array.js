function printReverse(x) {
	for (var i = x.length-1; i >= 0; i--) {
		console.log(x[i]);
	}
}

function isUniform(x) {
	var ele = x[0];
	for (var i = 1; i < x.length; i++) {
		if (x[i] === ele) {
			ele = x[i];
		} else {
			return false;
		}
	}
	return true
}

function sumArray(x) {
	var sum = 0;
	for (var i = 0; i < x.length; i++) {
		sum+= x[i];
	}
	return sum;
}

function max(x) {
	var maxNum = x[0];
	for (var i = 1; i < x.length; i++) {
		if(x[i] > maxNum) {
			maxNum = x[i];
		}
	}
	return maxNum;
}