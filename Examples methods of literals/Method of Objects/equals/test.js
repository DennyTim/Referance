const assert = require("chai").assert;
const objectEquals = require('./index');

describe("Simple check objectEquals", function () {
  it("Проверка равности двух null, ожидаем True", function () {
    assert.isTrue(objectEquals(null, null));
  });
  it("Проверка равности null, undefined, ожидаем False", function () {
    assert.isFalse(objectEquals(null, undefined));
  });
  it("Проверка равности regex`ов: /abc/, /abc/; ожидаем False ", function () {
    assert.isFalse(objectEquals(/abc/, /abc/));
  });
  it("Проверка равности regex`ов: /abc/, /123/ ожидаем False", function () {
    assert.isFalse(objectEquals(/abc/, /123/));
  });
  it("Проверка равности regex`ов по ссылке: /abc/, /123/ ожидаем True", function () {
    var r = /abc/;
    assert.isTrue(objectEquals(r, r));
  });
  it("Проверка равности строк: 'hi', 'hi' ожидаем True", function () {
    assert.isTrue(objectEquals('hi', 'hi'));
  });
  it("Проверка равности чисел: 5, 5 ожидаем True", function () {
    assert.isTrue(objectEquals(5, 5));
  });
  it("Проверка равности чисел: 5, 10; ожидаем False", function () {
    assert.isFalse(objectEquals(5, 10));
  });
  it("Проверка равности пустых массивов, ожидаем True", function () {
    assert.isTrue(objectEquals([], []));
  });
  it("Проверка равности [1, 2], [1, 2] массивов, ожидаем True", function () {
    assert.isTrue(objectEquals([1, 2], [1, 2]));
  });
  it("Проверка равности нессортированных массивов, ожидаем False", function () {
    assert.isFalse(objectEquals([1, 2], [2, 1]));
  });
  it("Проверка равности [1, 2], [1, 2, 3] массивов, ожидаем False", function () {
    assert.isFalse(objectEquals([1, 2], [1, 2, 3]));
  });
  it("Проверка равности пустых объектов, ожидаем True", function () {
    assert.isTrue(objectEquals({}, {}));
  });
  it("Проверка равности { a: 1, b: 2 }, { a: 1, b: 2 } объектов, ожидаем True", function () {
    assert.isTrue(objectEquals({ a: 1, b: 2 }, { a: 1, b: 2 }));
  });
  it("Проверка равности { a: 1, b: 2 }, { b: 2, a: 1 } объектов, ожидаем True", function () {
    assert.isTrue(objectEquals({ a: 1, b: 2 }, { b: 2, a: 1 }));
  });
  it("Проверка равности { a: 1, b: 2 }, { a: 1, b: 3 } объектов, ожидаем False", function () {
    assert.isFalse(objectEquals({ a: 1, b: 2 }, { a: 1, b: 3 }));
  });
  it("Проверка равности вложенных объектов, ожидаем True", function () {
    assert.isTrue(
      objectEquals(
        { 1: { name: 'mhc', age: 28 }, 2: { name: 'arb', age: 26 } },
        { 1: { name: 'mhc', age: 28 }, 2: { name: 'arb', age: 26 } }
      )
    );
  });
  it("Проверка равности вложенных объектов, ожидаем False", function () {
    assert.isFalse(
      objectEquals(
        { 1: { name: 'mhc', age: 28 }, 2: { name: 'arb', age: 26 } },
        { 1: { name: 'mhc', age: 28 }, 2: { name: 'arb', age: 27 } }
      )
    );
  });

  it("Проверка массивов с одинаковыми значениями если у одного из них есть undefined, ожидаем False", () => {
    assert.isFalse(objectEquals([1, 2, undefined], [1, 2]));
  });

  it("Проверка массивов и обьектов с одинаковыми значениями и ключами, ожидаем False", () => {
    assert.isFalse(objectEquals([1, 2, 3], { 0: 1, 1: 2, 2: 3 }));
  });

  it("Проверка примитива 1234 и обьекта Date(1234), ожидаем False", () => {
    assert.isFalse(objectEquals(new Date(1234), 1234));
  });
});

describe("Запись метода в глобал Object objectEquals", function () {
  Object.prototype.equals = function (obj) {
    return objectEquals(this, obj);
  };

  let assertFalse = assert.isFalse;
  let assertTrue = assert.isTrue;

  it("Проверка равности null и объекта, ожидаем False", function () {
    assertFalse({}.equals(null));
  });

  it("Проверка равности undefined и объекта, ожидаем False", function () {
    assertFalse({}.equals(undefined));
  });

  it("Проверка равности строк: 'hi', 'hi' , ожидаем True", function () {
    assertTrue('hi'.equals('hi'));
  });

  it("Проверка равности чисел созданного через литерал и примитив (5, 5), ожидаем True", function () {
    assertTrue(new Number(5).equals(5));
  });

  it("Проверка равности чисел созданного через литерал и примитив (5, 10), ожидаем False", function () {
    assertFalse(new Number(5).equals(10));
  });

  it("Проверка равности чисел созданного через литерал и примитив числа 1 и строки '1', ожидаем False", function () {
    assertFalse(new Number(1).equals('1'));
  });

  it("Проверка равности пустых массивов, ожидаем True", function () {
    assertTrue([].equals([]));
  });

  it("Проверка равности [1, 2], [1, 2] массивов, ожидаем True", function () {
    assertTrue([1, 2].equals([1, 2]));
  });

  it("Проверка равности нессортированных массивов, ожидаем False", function () {
    assertFalse([1, 2].equals([2, 1]));
  });

  it("Проверка равности [1, 2], [1, 2, 3] массивов, ожидаем False", function () {
    assertFalse([1, 2].equals([1, 2, 3]));
  });

  it("Сравнение обьектов Date, ожидаем True", function () {
    assertTrue(new Date('2011-03-31').equals(new Date('2011-03-31')));
  });

  it("Сравнение обьектов Date, ожидаем False", function () {
    assertFalse(new Date('2011-03-31').equals(new Date('1970-01-01')));
  });

  it("Проверка равности пустых объектов, ожидаем True", function () {
    assertTrue({}.equals({}));
  });

  it("Проверка равности { a: 1, b: 2 }, { a: 1, b: 2 } объектов, ожидаем True", function () {
    assertTrue({ a: 1, b: 2 }.equals({ a: 1, b: 2 }));
  });

  it("Проверка равности { a: 1, b: 2 }, { b: 2, a: 1 } объектов, ожидаем True", function () {
    assertTrue({ a: 1, b: 2 }.equals({ b: 2, a: 1 }));
  });

  it("Проверка равности { a: 1, b: 2 }, { a: 1, b: 3 } объектов, ожидаем False", function () {
    assertFalse({ a: 1, b: 2 }.equals({ a: 1, b: 3 }));
  });

  it("Проверка равности вложенных объектов, ожидаем True", function () {
    assertTrue(
      { 1: { name: 'mhc', age: 28 }, 2: { name: 'arb', age: 26 } }.equals({
        1: { name: 'mhc', age: 28 },
        2: { name: 'arb', age: 26 }
      })
    );
  });
  it("Проверка равности вложенных объектов, ожидаем False", function () {
    assertFalse(
      { 1: { name: 'mhc', age: 28 }, 2: { name: 'arb', age: 26 } }.equals({
        1: { name: 'mhc', age: 28 },
        2: { name: 'arb', age: 27 }
      })
    );
  });
})

describe("Сравнение одиночных обьектов с разными свойства, вложенностью и типами данных objectEquals", () => {
  Object.prototype.equals = function (obj) {
    return objectEquals(this, obj);
  };

  let assertFalse = assert.isFalse;
  let assertTrue = assert.isTrue;

  var a = { a: 'text', b: [0, 1] };
  var b = { a: 'text', b: [0, 1] };
  var c = { a: 'text', b: 0 };
  var d = { a: 'text', b: false };
  var e = { a: 'text', b: [1, 0] };
  var i = {
    a: 'text',
    c: {
      b: [1, 0]
    }
  };
  var j = {
    a: 'text',
    c: {
      b: [1, 0]
    }
  };
  var k = { a: 'text', b: null };
  var l = { a: 'text', b: undefined };

  it("Проверка a b, ожидаем True", () => assertTrue(a.equals(b)));
  it("Проверка i j, ожидаем True", () => assertTrue(i.equals(j)));
  it("Проверка a c, ожидаем False", () => assertFalse(a.equals(c)));
  it("Проверка c d, ожидаем False", () => assertFalse(c.equals(d)));
  it("Проверка a e, ожидаем False", () => assertFalse(a.equals(e)));
  it("Проверка d k, ожидаем False", () => assertFalse(d.equals(k)));
  it("Проверка k l, ожидаем False", () => assertFalse(k.equals(l)));
})

describe("Сравнение обьектов с методами objectEquals", () => {
  // нет двух разных функций на самом деле равны, они захватывают свои контекстные переменные
  // так что даже если они имеют одинаковый toString(), они не будут иметь одинаковую функциональность
  const func = function (x) {
    return true;
  };
  const func2 = function (x) {
    return true;
  };

  it("Сравнение одной и той же функции, ожидаем True", () => assert.isTrue(objectEquals(func, func)));
  it("Сравнение разных функций, ожидаем False", () => assert.isFalse(objectEquals(func, func2)));

  it("Сравнение объектов с одним и тем же методом, ожидаем True", () => {
    assert.isTrue(objectEquals({ a: { b: func } }, { a: { b: func } }))
  });

  it("Сравнение объектов с разными методами, ожидаем False", () => {
    assert.isFalse(objectEquals({ a: { b: func } }, { a: { b: func2 } }));
  });
})
