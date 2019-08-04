// Каждый обьект будет иметь свое хранилище

const TodoList = (function(){
  let store = {};
  let id = 0;

  return class {
    constructor() {
      this.id = id++;
      store[this.id] = {};
      store[this.id].todos = [];
      this.init();  //обязательно вызвать для инициализации инстанса
    }

    init() {
      Object.defineProperty(this, 'todos', {
        //дескрипторы для описания поля
        get: function() {
          return Object.freeze(store[this.id].todos);
        },
        enumerable: true,
        configurable: false
      });
    }

    add(todo) {
      store[this.id].todos.push(todo);
    }

    edit(id, data) {
      for(let i = 0; i < store[this.id].todos.length; i++) {
        let todo = this.todo[i];
  
        if(todo.id === id) {
          store[this.id].todo.title = data.title;
          store[this.id].todo.completed = data.completed;
          break;
        }
  
      }
    }

    remove(id) {
      for(let i = 0; i < store[this.id].todos.length; i++) {
        let todo = store[this.id].todos[i];
  
        if(todo.id === id) {
          store[this.id].todos.splice(index, 1);
          break;
        }
      }
    }
    
    // В случае удаления обьекта класса и всех сохраненных данных с помощью него
    destroy() {
      state[this.id] = null;
      this = null;
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
let todoList2 = new TodoList();

todo.id = 'asdfa';    //не сработает
todoList.add(todo);   
console.log(todoList.todos);
console.log(todoList2.todos);
