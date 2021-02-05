const { findUserById, getUserName } = require('./promisseGetUser');

describe('when user get found', () => {
  test('return the user', () => {
    expect.assertions(1);
    return expect(getUserName(4)).resolves.toStrictEqual('Mark');
    // return getUserName(4).then(name => {
    //   expect(name).toEqual('Mark');
    // });
  });
});

describe('when user get not found', () => {
  test('return error', () => {
    expect.assertions(1);
    return expect(getUserName(6)).rejects.toStrictEqual({ error: 'User with 6 not found.' })
  });
});