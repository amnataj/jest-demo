const { capitalize, reverse, isPalindrome } = require('./strings');

describe('capitalize', () => {
  test('capitalizes the first letter and lowercases the rest', () => {
    expect(capitalize('hELLO')).toBe('Hello');
  });

  test('returns an empty string for empty input', () => {
    expect(capitalize('')).toBe('');
  });
});

describe('reverse', () => {
  test('reverses a string', () => {
    expect(reverse('abc')).toBe('cba');
  });
});

describe('isPalindrome', () => {
  test.each([
    ['racecar', true],
    ['A man, a plan, a canal: Panama', true],
    ['hello', false],
  ])('isPalindrome(%p) returns %p', (input, expected) => {
    expect(isPalindrome(input)).toBe(expected);
  });
});
