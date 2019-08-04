// Испробовать модульный подход импорт/экспорт
// Библиотека для тестирования Jest


function sayName(name) {
    let message = 'My name is' + name;
    return message;
}

let arr = [5, 6, 3, 5, 6];
let result = arr.reduce(function(sum, elem){
    return sum + elem;
})


let assert = require("chai").assert; // подключили стиль assert

//Описание блока теста Mocha

describe("sayName", function(){ 
    it("Получили фразу с новым именем", function(){ 
        assert.typeOf(sayName("Max"), 'string')    //сверка получаемого типа при вызове фу-и
    });
});

describe("result", function() {
    it("Получили сумму элементов", function(){
        assert.equal(result, 25);                  //проверка на равность значению
    });
});