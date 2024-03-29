import Undead from '../js/characters/Undead';

const variant = new Undead(1);
const correct = {
  level: 1,
  attack: 40,
  defence: 10,
  health: 50,
  type: 'undead',
};

test('Checking creating class Undead', () => {
  expect(variant).toEqual(correct);
});
