//Полиморфизм в js работает через "утиную типизацию"

//Различное поведение при одной реализации
//Формой является обьект
class Todo {
  static implements(object) {
    let type = {
      title: String,
      num: Number
    };

    for(let key in type) {
      if(!object.hasOwnProperty(key) || !object[key] instanceof type[key]) {
        return false;
      }
    }

    return true;
  }
};

let todo = {
  title: 'asdsds',
  num: 54
};

console.log(Todo.implements(todo))