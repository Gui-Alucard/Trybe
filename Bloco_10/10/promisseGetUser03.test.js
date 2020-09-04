const { findUserById, getUserName } = require('./promisseGetUser');

describe('getUserName com async', () => {
  test('testar se usuário foi encontrado', async () => {
    const name = await getUserName(4);
    expect(name).toBe('Mark');
    // await expect(getUserName(4)).resolves.toBe('Mark');
  });
  
  test('testar se usuário não foi encontrado', async () => {
    expect.assertions(1);
    try {
      await getUserName(1);
    } catch (e) {
      expect(e).toEqual({ error: 'User with 1 not found.' })
    }
    // await expect(getUserName(1)).rejects.toStrictEqual({ error: 'User with 6 not found.' });
  });
})