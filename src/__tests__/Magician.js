import Magician from '../js/characters/Magician';

const variant = new Magician(1);
const correct = {
  level: 1,
  attack: 10,
  defence: 40,
  health: 50,
  type: 'magician',
};

test('Checking creating class Magician', () => {
  expect(variant).toEqual(correct);
});
