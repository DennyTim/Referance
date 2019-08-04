let user = {
	name: "Ivan",
}

function sayName(surname) {
	console.log(this);
	console.log(this.name + surname);
}

sayName.call(user, ' Ivanov');		// насильная передача контекста
sayName.apply(user, [' Petrov']);

function count(number) {
	return this * number;
}

let double = count.bind(2); 		// привязка контекста
console.log(double(4));