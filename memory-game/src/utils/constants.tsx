import { GAME_MODES, GAME_MODES_GRID, RESULTS } from './types';

export const INITIAL_NICKNAME = 'Player';
export const INITIAL_MODE = GAME_MODES.EASY;
export const INITIAL_TIME = false;

export const SETTINGS_REDUCER_NAME = 'settings';
export const GAME_REDUCER_NAME = 'game';

export const INITIAL_CURRENT_PICKED_VALUE = '';
export const INITIAL_RANDOM_GRID_VALUES = [];
export const INITIAL_LEVEL = 1;
export const INITIAL_SCORE = 0;
export const INITIAL_IS_TIME_UP = false;
export const INITIAL_DURATION = 11;
export const INITIAL_TIMER_RESET = false;
export const INITIAL_RESULT = RESULTS.LOSE;

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
};

export const SCORES = {
  [GAME_MODES.EASY]: { timeless: 10, timed: 20 },
  [GAME_MODES.MEDIUM]: { timeless: 20, timed: 50 },
  [GAME_MODES.HARD]: { timeless: 30, timed: 100 },
};

export const LEVELS = {
  [GAME_MODES.EASY]: { 1: 2, 2: 3, 3: 5, 4: 6, 5: 8 },
  [GAME_MODES.MEDIUM]: { 1: 3, 2: 4, 3: 6, 4: 9, 5: 12 },
  [GAME_MODES.HARD]: { 1: 4, 2: 6, 3: 9, 4: 13, 5: 16 },
};