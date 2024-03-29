import { calcTileType } from '../js/utils';

test.each([
  [16, 'left'],
  [23, 'right'],
  [1, 'top'],
  [57, 'bottom'],
  [0, 'top-left'],
  [7, 'top-right'],
  [56, 'bottom-left'],
  [63, 'bottom-right'],
  [9, 'center'],
])('testing function calcTileType with cell %s', (cell, expected) => {
  const result = calcTileType(cell, 8);
  expect(result).toBe(expected);
});
