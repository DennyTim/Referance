class TodoList {

  //единственный способ сделать инкапсуляцию за счет замыканий
  //при этом все методы добавляются в инстанс, а не прототип
  //минус в том, что каждый обьект будет содержать одни и те же методы

  constructor () {
    let todos = [];

    /** 
     * Будет использоваться как приватный метод
     * Но обычные методы могут также использовать приватные
    */
    function init() {}

    Object.defineProperty(this, 'todos', {
      //дескрипторы для описания поля
      get: function() {
        return Object.freeze(todos);
      },
      enumerable: true,
      configurable: false
    });

    //привелегерованный метод
    this.add = function(todo) {
      todos.push(todo);
    }

    this.edit = function(id, data) {
      for(let i = 0; i < todos.length; i++) {
        let todo = this.todo[i];
  
        if(todo.id === id) {
          todo.title = data.title;
          todo.completed = data.completed;
          break;
        }
  
      }
    }

    this.remove = function(id) {
      for(let i = 0; i < todos.length; i++) {
        let todo = todos[i];
  
        if(todo.id === id) {
          todos.splice(index, 1);
          break;
        }
      }
    }
  }
  // Публичный метод может использовать приватные
  // Будет добавлен прототипу
  print() {
    let todos = this.todos;
  }
}

class Todo {
  constructor(title, completed = false) {
    let id = Date.now();
    /**
     * дополнительно переменные указывать не нужно, 
     * для этого есть Object.defineProperty
     */
    Object.defineProperty(this, 'id', {
      //дескрипторы для описания поля
      get: function() {
        return id;
      },
      enumerable: true,
      configurable: false
    });

    Object.defineProperty(this, 'title', {
      //дескрипторы для описания поля
      get: function() {
        return title;
      },
      set: function(value) {
        title = value;
      },
      enumerable: true,
      configurable: false
    });

    Object.defineProperty(this, 'completed', {
      //дескрипторы для описания поля
      get: function() {
        return completed;
      },
      set: function(value) {
        completed = value;
      },
      enumerable: true,
      configurable: false
    });
    
    return this;
  }
}

let todo = new Todo('Изучить ООП');

todo.id = 'asdfa';

let todoList = new TodoList();

todoList.add(todo);

console.log(todo);
console.log(todoList.todos);