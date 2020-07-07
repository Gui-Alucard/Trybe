const ex03 = require('./02e03');

describe('getUserName com async', () => {
  test('testar se usuário foi encontrado', async () => {
    const name = await ex03.getUserName(4);
    expect(name).toBe('Mark');
  });
  
  test('testar se usuário não foi encontrado', async () => {
    expect.assertions(1);
    try {
      await ex03.getUserName(1);
    } catch (e) {
      expect(e).toEqual({ error: 'User with 1 not found.' })
    }
  });
})