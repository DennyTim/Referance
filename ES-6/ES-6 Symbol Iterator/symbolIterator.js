let someObj = {
	to:10,
	[Symbol.iterator]: function() {     // Встроенный итератор для for..of, в котором обьект итерируется так как написано в фу-и
		let current = 0;
		let stop = this.to;

		return {
			next(){
				if(current <= stop){
					return {
						done: false,
						value: current++
					}
				} else {
					return {
						done: true
					}
				}
			}
		}
	}
}

for(let key of someObj) {
	console.log(key);
}
