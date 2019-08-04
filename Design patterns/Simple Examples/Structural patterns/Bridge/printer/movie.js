//Паттерн моста заключается в отделении абстракции(данных) от реализации
//Даст возможность делать по-разному отображение

class Movie {
    constructor(title, year, runtime, genre) {  //Уровень абстракции
        this.title = title;
        this.year = year;
        this.runtime = runtime;
        this.genre = genre;
    }

    print() {
        return `${this.title} ${this.year}`;    //Уровень реализации
    }
}

module.exports = Movie;