/**
 * 
 *	Реализовать класс EmailParser по следующим правилам:
		- в объекте существует только одно реальное поле email
		- также присутствует возможность обратиться к полям
			- isCorrect: (boolean) корректный ли адрес
			- name: (string) часть до собаки || null if !isCorrect
			- domain: (string) часть после собаки || null if !isCorrect 
 *
 */


class EmailParser {
    constructor(email) {
        this.email = email;
    }

    get isCorrect(){
        return /^.+@.+\..+/.test(this.email);   
        //"^.+" В начале хотя бы один символ, 
        //после собачки хотя бы один символ, 
        //после экранированной точки хотя бы один символ
    }

    get name(){
        //Вычленяем имя
        return this.isCorrect ? this.email.split('@')[0] : null;
    }

    get domain(){
        //Вычленяем домен
        return this.isCorrect ? this.email.split('@')[1] : null;
    }
}

let parser = new EmailParser('info@ntschool.ru');
console.log(parser.name);
console.log(parser.domain);
console.log(parser.isCorrect);

parser.email = 'some@nz';
console.log(parser.name);
console.log(parser.domain);
console.log(parser.isCorrect);