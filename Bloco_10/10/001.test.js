const mostrador = (word) => {
  console.log(word);
}

const uppercase = (str, callback) => {
  const upper = str.toUpperCase();
  callback(upper);
}

uppercase('hamaji', mostrador)

test('transform in uppercase!', done => {
  uppercase('lowtoup', (upper) => {
    expect(upper).toBe('LOWTOUP');
    done();
  })
})