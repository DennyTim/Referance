/*
	JSON
	- маленький вес
	- простота чтения
*/

let options = {
	width: 1366,
	height: 768,
	background: 'red',
	font: {
		size: '16px',
		color: '#fff'
	}
};

let tempdata = JSON.stringify(options);
// в JSON   {"width":1366,"height":768,"background":"red","font":{"size":"16px","color":"#fff"}}
console.log(JSON.parse(tempdata));
// c JSON`a { width: 1366, height: 768, background: 'red', font: { size: '16px', color: '#fff' }}
