function myForEach(arr, func) {
//loop through the array
for(var i = 0; i < arr.length; i++) {
	//call func for each item in array
	func(arr[i]);
	}
}

Array.prototype.myForEach = function(func) {
	for(var i = 0; i < this.length; i++) {
		func(this[i]);
	}
}

var friends = ["Toan","Sau","Feng","li","Cliff"];

friends.myForEach(function(name){
	console.log(name);
})