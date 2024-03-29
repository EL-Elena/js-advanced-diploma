import Bowman from '../js/characters/Bowman';

const variant = new Bowman(1);
const correct = {
  level: 1,
  attack: 25,
  defence: 25,
  health: 50,
  type: 'bowman',
};

test('Checking creating class Bowman', () => {
  expect(variant).toEqual(correct);
});
