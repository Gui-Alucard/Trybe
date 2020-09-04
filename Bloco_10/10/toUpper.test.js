const uppercase = require('./toUpper');

test('transform in uppercase!', done => {
  uppercase('lowtoup', (pontoToUpperCase) => {
    expect(pontoToUpperCase).toBe('LOWTOUP');
    done();
  });
});