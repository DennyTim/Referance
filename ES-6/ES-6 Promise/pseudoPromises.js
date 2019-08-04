//Promise - обещания

// Вы произвели выстрел из лука
// Пока стрела летит вы получили обещание того, что она либо попадет в цель или нет
// При попадании вы получаете статус resolve, при не попадании rejected
// В случае resolve вы получили награду, в случае rejected вы получили утешитильный приз


let drink = 0;

function shoot(arrow, headshot, fail){
	console.log('Вы сделали выстрел...');
	
	setTimeout(function(){
		Math.random() > .5 ? headshot({}) : fail('Вы промахнулись');
	}, 3000)
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

shoot({}, 
		function(mark) {
			console.log('Вы попали в цель!');
			win(mark, buybeer, giveMoney);
		},
		function(miss) {
			console.error(miss);
			loose();
		}
	 )