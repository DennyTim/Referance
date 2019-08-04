const some = require('./index.js');

describe('some', () => {
  test('Определена', () => {
    expect(some).toBeDefined();
  });

  test('Вернет false, если не один проверки не прошел', () => {
    let list = [{}, {}, {}];
    let actual = some(list, item => item.id ? true : false);

    expect(actual).toBe(false);
  });

  test('Вернет true, если хотя бы один обьект проходит проверку', () => {
    let list = [{ id: 1 }, {}, {}];
    let actual = some(list, item => item.id ? true : false);

    expect(actual).toBe(true);
  });

  test('Если список не передан будет ошибка', () => {
    expect(() => {
      some(null, item => item.id ? true : false);
    }).toThrowError();
  })
});
