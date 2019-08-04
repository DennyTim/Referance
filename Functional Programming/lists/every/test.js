const every = require('./index.js');

describe('every', () => {
  test('Определена', () => {
    expect(every).toBeDefined();
  });

  test('Вернет true, если у каждого элемента массива есть id', () => {
    let list = [{ id: 1 }, { id: 2 }, { id: 3 }];
    let actual = every(list, item => item.id ? true : false);

    expect(actual).toBe(true);
  });

  test('Вернет false, если хотя бы один обьект не имеет id в массиве', () => {
    let list = [{ id: 1 }, { id: 2 }, {}];
    let actual = every(list, item => item.id ? true : false);

    expect(actual).toBe(false);
  });

  test('Если список не передан будет ошибка', () => {
    expect(() => {
      every(null, item => item.id ? true : false);
    }).toThrowError();
  })
});
