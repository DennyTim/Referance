// AJAX -  Asynchronous Javascript and XML

// Запускать в Live Preview

let inputRub = document.getElementById('rub'),
	inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {			//	срабытывает при изменении текстового поля
	let request = new XMLHttpRequest();				// 	создаем обьект запроса
	request.open('GET', 'current.json');			//  метод для настройки ajax запроса (куда?)

	/*	Метод open принимает 5 аргументов

		method = GET, POST
		url = куда отправить запрос
		async = aсинхронность запроса
		login = учетные данные для авторизации
		pass = учетные данные для авторизации
	*/

	request.setRequestHeader('Content-type', 'application/json; charset=utf8'); // указываем, что хотим получить (а что хотим получить?)

	// Response от сервера
	// status (200, 304, 404)
	// statusText	(OK, Not found)
	// responseText or response (данные с сервера)
	/* readyState (этапы отправки и получения данных)

	0	UNSENT	Объект был создан. Метод open() ещё не вызывался.
	1	OPENED	Метод open() был вызван.
	2	HEADERS_RECEIVED	Метод send() был вызван, доступны заголовки (headers) и статус.
	3	LOADING	Загрузка; responseText содержит частичные данные.
	4	DONE	Операция полностью завершена.
	*/

	request.addEventListener('readystatechange', function () {	// вешаем обработчик для отслеживания состояния запросов
		if (request.readyState === 4 && request.status == 200) {	// вешаем условие на проверку ответа
			let data = JSON.parse(request.response);
			inputUsd.value = inputRub.value / data.usd;			// производим свои действия
		} else {
			inputUsd.value = "Что-то пошло не так!";
		}
	});

	request.send();																	//формируем запрос за ответом к серверу

});
