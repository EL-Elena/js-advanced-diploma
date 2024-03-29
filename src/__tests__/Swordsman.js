import Swordsman from '../js/characters/Swordsman';

const variant = new Swordsman(1);
const correct = {
  level: 1,
  attack: 40,
  defence: 10,
  health: 50,
  type: 'swordsman',
};

test('Checking creating class Swordsman', () => {
  expect(variant).toEqual(correct);
});
