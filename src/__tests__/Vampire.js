import Vampire from '../js/characters/Vampire';

const variant = new Vampire(1);
const correct = {
  level: 1,
  attack: 25,
  defence: 25,
  health: 50,
  type: 'vampire',
};

test('Checking creating class Vampire', () => {
  expect(variant).toEqual(correct);
});
