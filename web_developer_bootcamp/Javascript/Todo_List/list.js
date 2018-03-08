var todos = ['Buy New Turtle'];

var input = prompt("What would you like to do?");



while (input !== "quit") {
	//handle input
	if (input === 'list'){
		listTodos();
	}
	else if (input === "new") {
		newTodo();
	}
	else if (input === 'delete') {
		deleteTodo();
	}
	input = prompt("What would you like to do?");
}

console.log('OK, YOU QUIT THE APP')

function listTodos() {
	todos.forEach(function(todo, i) {
		console.log('**************')
		console.log(i + ': ' + todo);
	});
	console.log('**************')
}

function newTodo() {
	//add new todo
	var newTodo = prompt("Enter new todo");
	//add to todos array
	todos.push(newTodo);
	console.log('Added Todo');
}

function deleteTodo() {
	//ask for index of todo to be deleted
	var index = prompt('Enter index of todo to delete');
	//delete that todo
	//splice()
	todos.splice(index, 1);
	console.log('Deleted todo');
}