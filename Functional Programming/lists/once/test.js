const once = require('./index.js');

describe('once', () => {
  test('Определена', () => {
    expect(once).toBeDefined();
  });

  test('Returned fn', () => {
    let actual = once();
    expect(actual).toBeInstanceOf(Function);
  });
});
