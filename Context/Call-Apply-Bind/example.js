let some = {
    i: 1
};

function double(n, m) {
    return this.i * this.i * n * m;     // ошибка!!!  Uncaught TypeError: some.double is not a function
}

console.log(double.call(some, 3, 2));       // контекст обьекта some
console.log(double.apply(some, [3, 2]));    // контекст обьекта some

//function.bind(context) -> new_function context = const (c помощью bind контекст привязывается навсегда)
//bind привязывает только контекст, а call и apply сразу же вызывают
//bind может принимать больше одного параметра

// let double = (n, m) => {}        // для стрелочных не работает call, apply, bind (после bind тоже)

let double2 = double.bind(some);
let double3 = double2.bind(some, 3, 2); //карринг это жетское закрепление параметров рядом с контекстом
