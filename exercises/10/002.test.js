const ex02 = require('./02e03');

describe('when user get found', () => {
  test('return the user', () => {
    expect.assertions(1);
    return ex02.getUserName(4).then(name => {
      expect(name).toEqual('Mark');
    })
  })
})

describe('when user get not found', () => {
  test('return error', () => {
    expect.assertions(1);
    return ex02.getUserName(4).catch(erro => {
      expect(erro).toEqual({ error: 'User with 4 not found.' });
    })
  })
})