import Daemon from '../js/characters/Daemon';

const variant = new Daemon(1);
const correct = {
  level: 1,
  attack: 10,
  defence: 10,
  health: 50,
  type: 'daemon',
};

test('Checking creating class Daemon', () => {
  expect(variant).toEqual(correct);
});
