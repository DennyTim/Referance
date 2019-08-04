// + IIFE методы у прототипа, а значить в памяти инстансов фу-и не дублируются
// При создании инстансов все данные из массива как статические дублируются, к примеру массив todos

const TodoList = (function(){
  let todos = [];

  return class {
    constructor() {
      this.init();  //обязательно вызвать для инициализации инстанса
    }

    init() {
      Object.defineProperty(this, 'todos', {
        //дескрипторы для описания поля
        get: function() {
          return Object.freeze(todos);
        },
        enumerable: true,
        configurable: false
      });
    }

    add(todo) {
      todos.push(todo);
    }

    edit(id, data) {
      for(let i = 0; i < todos.length; i++) {
        let todo = this.todo[i];
  
        if(todo.id === id) {
          todo.title = data.title;
          todo.completed = data.completed;
          break;
        }
  
      }
    }

    remove(id) {
      for(let i = 0; i < todos.length; i++) {
        let todo = todos[i];
  
        if(todo.id === id) {
          todos.splice(index, 1);
          break;
        }
      }
    }
  }
})();

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
let todoList = new TodoList();

todo.id = 'asdfa';    //не сработает
todoList.add(todo);   
console.log(todoList.todos);