const bob = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(bob.ab(1, 2)).toBe(3);
});

test('multiplies 4 * 5 to equal 20', () => {
  expect(bob.ab(4, 5)).toBe(20);
});


