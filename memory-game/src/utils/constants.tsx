import { GAME_MODES, GAME_MODES_GRID } from './types';

export const INITIAL_NICKNAME = 'Player';
export const INITIAL_MODE = GAME_MODES.EASY;
export const INITIAL_TIME = false;

export const SETTINGS_REDUCER_NAME = 'settings';

export const GAME_MODES_LIST = [
  { value: GAME_MODES.EASY, label: GAME_MODES_GRID.EASY },
  { value: GAME_MODES.MEDIUM, label: GAME_MODES_GRID.MEDIUM },
  { value: GAME_MODES.HARD, label: GAME_MODES_GRID.HARD },
];