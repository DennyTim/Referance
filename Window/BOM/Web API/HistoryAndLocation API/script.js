/* Потестированный адрес*/
//url http://127.0.0.1:5500/Web%20API/HistoryAndLocation%20API/index.html?query=string&num=1#output


/* Функция рендера */
function show(output) {
  let p = document.createElement('p');
  p.textContent = output;
  document.getElementById('output').appendChild(p);
  setTimeout(() => {
    document.getElementById('output').removeChild(p);
  }, 4000);
}

/** Слушатель события загрузки html */
document.addEventListener('DOMContentLoaded', () => {
  /**
   * Создание новой записи истории браузера, устанавливая state, title, и url. 
   * При этом переходит на страницу после обновления
  */
  //history.pushState(null, 'Title', 'index1.html');

  /**
   * Происходит когда меняется location hash
   */
  window.addEventListener('hashchange', hc);

  /**
   * Событие popstate вызывается, когда изменяется активная запись истории. 
   * Если изменение записи истории было вызвано методом history.pushState() или history.replaceState(), 
   * то состояние события popstate будет содержать state копии входящего в историю объекта
   */
  window.addEventListener('popstate', ps);

  document.getElementById('link').addEventListener('click', c);
});

function c(ev) {
  show('Clicked');
  ev.preventDefault();
  let href = ev.currentTarget.href;
  let pid = ev.currentTarget.getAttribute('data-person');
  show(href);
  history.replaceState({ 'pid': pid }, 'title', href);
  loadPerson();
}

function loadPerson() {
  show('LoadPerson');
  let hs = JSON.stringify(history.state);
  let data = JSON.parse(hs);
  console.log(data.pid);
  show(data.pid);
}

function hc(ev) {
  show('hashchange');
}

function ps(ev) {
  show('popstate');
}

/**
 * Обьект location свойства
 **/
show(`location.hred ${location.href}`); // текущий адрес в строке
show(`location.search ${location.search}`); //?query=string&num=1
show(`location.hash ${location.hash}`); //#output
show(`encodeURI ${encodeURIComponent(location.href)}`); // закодированная строка
show(`decodeURI ${decodeURIComponent(location.href)}`); // декодированная строка

/**
 * Обьект location методы
 **/
/* Заменить адрес на строку в указанную в аргументе */
//location.replace('http://google.com');

/* Перезагрузить страницу */
//location.reload()

/**
 * Обьект history
 **/

/* Вернуть на заданное количество страниц назад */
//history.go(-1); 

/* Вперед/назад */
//history.back();
//history.forward();

/**
 * Обьект history свойства
 **/
show(`history.state ${history.state}`); //null