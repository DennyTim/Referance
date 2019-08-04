//Promise - обещания

// Вы произвели выстрел из лука
// Пока стрела летит вы получили обещание того, что она либо попадет в цель или нет
// При попадании вы получаете статус resolve, при не попадании rejected
// В случае resolve вы получили награду, в случае rejected вы получили утешитильный приз


let drink = 0;

function shoot(arrow){
	console.log('Вы сделали выстрел...');
	let promise = new Promise(function(resolve, reject){		// обязательные состояния для обещания
		setTimeout(function(){
			Math.random() > .5 ? resolve({}) : reject('Вы промахнулись'); 	//рандомная функция для генерации цели
		}, 3000);
	});
	return promise;
};

function win(){
	console.log('Вы победили!');
	(drink == 1) ? buybeer() : giveMoney();
}

function buybeer(){
	console.log('Вам купили пиво!');
}

function giveMoney(){
	console.log('Вам заплатили!');
}

function loose() {
	console.log('Вы проиграли!');
}

shoot({})
	.then(mark => console.log('Вы попали в цель!'))	// это выполниться при resolve
	.then(win)
	.catch(loose)									// это выполниться при reject
	.then(mark => console.log("Очистка"));								// последни then будет выполнен в любом случае(например для очистки инпутов после ввода)