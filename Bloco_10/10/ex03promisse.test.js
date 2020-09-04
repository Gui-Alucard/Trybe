const { findAnimalsByType, getListAnimals } = require('./animals');

describe('Quando o tipo do animal existe', () => {
  test('Retorne a lista de animais', () => {
    expect.assertions(2);
    return getListAnimals('Dog').then(listDogs => {
      expect(listDogs[0].name).toEqual('Dorminhoco');
      expect(listDogs[1].name).toEqual('Soneca');
    });
  });
});

describe('Quando o tipo do animal, existe', () => {
  test('Retorne a lista de animais', () => {
    expect.assertions(1);
    return expect(getListAnimals('Lion')).rejects.toStrictEqual({ error: "Não possui esse tipo de animal." });
    // return getListAnimals('Lion').catch(error =>
    //   expect(error).toStrictEqual({ error: "Não possui esse tipo de animal." })
    // );
  });
});