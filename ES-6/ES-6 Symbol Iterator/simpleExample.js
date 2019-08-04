let forPasport = Symbol();          //уникальный символ

let user = {
	firstname: 'Name',
	lastname: 'Last',
	[forPasport]: 454564545454      //деструктуризация для передачи символа, не учавствует в переборе
}

for(let key in user) {
	console.log(`${key} ${user[key]}`);
}
