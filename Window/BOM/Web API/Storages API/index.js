//Web storage
//localStorage
//sessionStorage
//JSON

// Свойство глобального обьекта window

//localStorage.setItem("number", 1);				      // добавление данных
//console.log(localStorage.getItem("number"));		// получение данных
//localStorage.removeItem("number", 1);				    // удаление ключа
//localStorage.clear();								            // очистка хранилища

window.addEventListener("DOMContentLoaded", function () {		//событие происходит когда весь документ полностью загружен
  let checkbox = document.getElementById('rememberMe'),
    change = document.getElementById('submiT'),
    form = document.querySelector('form');

  if (localStorage.getItem("isChecked") === "true") {
    checkbox.checked = true;
  }

  if (localStorage.getItem("bg") === "changed") {
    form.style.backgroundColor = "#FF4766";
  }

  checkbox.addEventListener("click", function () {
    localStorage.setItem("isChecked", true);
  });

  change.addEventListener('click', function () {
    localStorage.setItem('bg', 'changed');
  });

  // Помещаем обьект в хранилище

  let persone = {
    name: "Alex",
    age: 25,
    tech: ["mobile", "notebook"]
  }

  let serializedPersone = JSON.stringify(persone);	// обязательно, иначе в поле ключа получим [object][object]
  localStorage.setItem("Alex", serializedPersone);

  console.log(JSON.parse(serializedPersone));
})
