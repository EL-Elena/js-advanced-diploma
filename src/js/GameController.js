import themes from './themes';
import { generateTeam } from './generators';
import PositionedCharacter from './PositionedCharacter';
import Bowman from './characters/Bowman';
import Swordsman from './characters/Swordsman';
import Magician from './characters/Magician';
import Daemon from './characters/Daemon';
import Undead from './characters/Undead';
import Vampire from './characters/Vampire';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService

    this.gamePlay.drawUi(themes.prairie);

    const typesOpponent = [Daemon, Undead, Vampire];
    const positionsForOpponent = [];
    const typesGamer = [Bowman, Swordsman, Magician];
    const positionsForGamer = [];
    const characterCount = Math.floor(Math.random() * (4 - 1 + 1)) + 1;

    const opponentTeam = generateTeam(typesOpponent, 4, characterCount);
    const gamerTeam = generateTeam(typesGamer, 4, characterCount);

    const opponentCells = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 62, 62];
    const gamerCells = [0, 1, 8, 9, 16, 17, 24, 25, 32, 33, 40, 41, 48, 49, 56, 57];

    opponentTeam.characters.forEach((i) => {
      const position = opponentCells[Math.floor(Math.random() * opponentCells.length)];
      positionsForOpponent.push(new PositionedCharacter(i, position));
      opponentCells.splice(opponentCells.indexOf(position), 1);
    });

    gamerTeam.characters.forEach((i) => {
      const position = gamerCells[Math.floor(Math.random() * gamerCells.length)];
      positionsForGamer.push(new PositionedCharacter(i, position));
      gamerCells.splice(gamerCells.indexOf(position), 1);
    });

    this.gamePlay.redrawPositions(positionsForOpponent.concat(positionsForGamer));
    this.showTooltip([...positionsForOpponent, ...positionsForGamer]);
  }

  showTooltip(el) {
    const allCells = this.gamePlay.cells;
    allCells.forEach((i) => {
      i.addEventListener('mouseover', () => {
        if (i.hasChildNodes()) {
          const index = allCells.indexOf(i);
          const character = el.find((obj) => obj.position === index).character;
          this.gamePlay.showCellTooltip(`\u{1F396}${character.level}\u{2694}${character.attack}\u{1F6E1}${character.defence}\u{2764}${character.health}`, index);
        }
      });
    });
  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
