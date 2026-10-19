const { add, subtract, multiply, divide } = require('./math');

describe('math functions', () => {
  test('add: adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('add: works with negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test('subtract: subtracts two numbers', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('multiply: multiplies two numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test('divide: divides two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divide: throws when dividing by zero', () => {
    expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
  });
});
