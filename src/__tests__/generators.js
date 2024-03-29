import { characterGenerator, generateTeam } from '../js/generators';
import Vampire from '../js/characters/Vampire';
import Undead from '../js/characters/Undead';
import Daemon from '../js/characters/Daemon';

const arr = [];
const types = [Daemon, Undead, Vampire];
const level = [1, 2, 3, 4];

test('Checking function characterGenerator', () => {
  const generator = characterGenerator(types, 4);
  arr.push(generator.next().value);
  arr.push(generator.next().value);
  arr.push(generator.next().value);
  expect(arr.length).toBe(3);
});

test('Checking count of characters in team with generateTeam', () => {
  const team = generateTeam(types, 4, 3);
  expect(team.characters.length).toBe(3);
});

test('Checking level of characters in team with generateTeam', () => {
  const team = generateTeam(types, 4, 3);
  expect(level.includes(team.characters[0].level)).toBe(true);
});
