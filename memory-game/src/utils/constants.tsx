import { GAME_MODES, GAME_MODES_GRID } from './types';

export const INITIAL_NICKNAME = 'Player';
export const INITIAL_MODE = GAME_MODES.EASY;
export const INITIAL_TIME = false;

export const SETTINGS_REDUCER_NAME = 'settings';
export const GAME_REDUCER_NAME = 'game';

export const INITIAL_CURRENT_PICKED_VALUE = '';

export const COLORS = ['red', 'green', 'blue', 'yellow', 'purple', 'pink', 'brown']; 
export const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].toString().split(',');
export const ALPHABET = 'ABCDEFGH'.split('');

export const GAME_MODES_LIST = [
  { 
    value: GAME_MODES.EASY, 
    label: GAME_MODES_GRID.EASY, 
    list: { 
      colors: [...COLORS].slice(0, 3),
      numbers: [...NUMBERS].slice(0, 3),
      alphabets: [...ALPHABET].slice(0, 3),
    } 
  },
  { 
    value: GAME_MODES.MEDIUM, 
    label: GAME_MODES_GRID.MEDIUM, 
    list: { 
      colors: [...COLORS].slice(0, 5),
      numbers: [...NUMBERS].slice(0, ),
      alphabets: [...ALPHABET].slice(0, 5),
    } 
  },
  { 
    value: GAME_MODES.HARD, 
    label: GAME_MODES_GRID.HARD, 
    list: { 
      colors: [...COLORS],
      numbers: [...NUMBERS],
      alphabets: [...ALPHABET],
    } 
  },
];

export const GRID_CONFIGS = {
  [GAME_MODES.EASY]: { cols: 3, size: 'w-56 h-56' },
  [GAME_MODES.MEDIUM]: { cols: 4, size: 'w-80 h-80' },
  [GAME_MODES.HARD]: { cols: 5, size: 'w-96 h-96' },
}