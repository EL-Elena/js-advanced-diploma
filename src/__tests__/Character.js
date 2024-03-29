import Character from '../js/Character';

test('Checking create an instance of the class Character ', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const test = new Character();
  }).toThrow('Сannot create an instance of the class Character');
});
