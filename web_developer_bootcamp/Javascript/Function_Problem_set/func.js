function isEven(x) {
	if (x % 2 === 0) {
		return true;
	}
	else {
		return false;
	}
}

function factorial(x) {
	if (x !== 0) {
		newNum = 0;
		for (var i = x; i > 1; i--) {
			if (newNum === 0) {
				newNum = i * (i-1);
			}
			else {
				newNum = newNum * (i-1);
			}
		}
		return newNum
	}
	else {
		return 1;
	}
}

function kebabToSnake(str) {
	return str.replace(/-/g, "_");
}