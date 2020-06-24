const thereIs = require('./ex008');

// 8. Teste se uma função foi definida

test('function is defined', () => {
  expect(typeof thereIs).toBe('function');
})