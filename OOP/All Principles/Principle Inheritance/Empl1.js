function extend(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype)
  subClass.prototype.conctructor = subClass;
}

function Todo(title, completed = false) {
  this.title = title;
  this.completed = completed;
}

function Task(title, dueDate, completed = false) {
  Todo.call(title, completed);
  this.dueDate = dueDate;
}

extend(Task, Todo);