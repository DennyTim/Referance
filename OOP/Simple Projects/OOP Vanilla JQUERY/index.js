class $ {
	constructor(selector) {										// опускаем нужный селектор в переменную 
		this.elems = document.querySelectorAll(selector);		
	}
	on(event, callback) {										// аргументами будут обработчик и куллбек
		for(let i = 0; i < this.elems.length; i++) {
			this.elems[i].addEventListener(event, callback); 	// всем элементам по обработчику
		}
		return this;   //$ {elems: NodeList(3)}
	}
}

let elems = new $('.item');
elems.on('focus', function() {
	this.style.border = '2px solid red';
});
elems.on('blur', function() {
	this.style.border = '1px solid grey';
});

/* Короткая форма */

//(new $('.item')).on('focus', function() {
//	this.style.border = '2px solid red';
//}).on('blur', function() {
//	this.style.border = '1px solid grey';
//});