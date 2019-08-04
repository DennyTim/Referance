import http from './http';
import Repository from './repository';

// Паттерн используется в случае, когда необходимо расширить фу-ал
// другого модуля не меняя его, путем использования обертки адаптера
import HttpAdapter from './http-adapter';

const httpAdapter = new HttpAdapter(http);
const courseRepo = new Repository('https://codedojo.ru', 'courses', httpAdapter);

courseRepo.getAll()
    .then(courses => console.log(courses)); 