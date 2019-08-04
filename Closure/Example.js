//Замыкание это фу-я способность которой запоминать 
//лексическую область видимости в которой она была обьявлена

function protectState() {
  let todos = [];

  function addTodo(todo) {
    todos.push(todo)
  }

  return addTodo;
}

//пока есть ссылка на фу-ю
//лексическая среда не удаляеться
let addTodo = protectState();
addTodo('Разобраться с замыканиями js')

//Паттерн модуля
let app = (function() {
  let todos = [];

  return {
    getTodos = function() {},
    getTodo =  function() {},
    addTodo =  function() {},
    editTodo =  function() {}
  };
})()