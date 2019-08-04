const TodoList = (function(){
  let store = new WeakMap();

  return class {
    constructor() {
      //при обнулении обьекта, массив также обнуляется 
      store.set(this, { todos: [] }) //в качестве ключа отправляем обьект

      this.init();  //обязательно вызвать для инициализации инстанса
    }

    init() {
      Object.defineProperty(this, 'todos', {
        //дескрипторы для описания поля
        get: function() {
          return Object.freeze(store.get(this).todos);
        },
        enumerable: true,
        configurable: false
      });
    }

    add(todo) {
      store.get(this).todos.push(todo);
    }

    edit(id, data) {
      for(let i = 0; i < store.get(this).todos.length; i++) {
        let todo = this.todo[i];
  
        if(todo.id === id) {
          store.get(this).todo.title = data.title;
          store.get(this).todo.completed = data.completed;
          break;
        }
  
      }
    }

    remove(id) {
      for(let i = 0; i < store.get(this).todos.length; i++) {
        let todo = store.get(this).todos[i];
  
        if(todo.id === id) {
          store.get(this).todos.splice(index, 1);
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
let todoList2 = new TodoList();

todo.id = 'asdfa';    //не сработает
todoList.add(todo);   
console.log(todoList.todos);
console.log(todoList2.todos);