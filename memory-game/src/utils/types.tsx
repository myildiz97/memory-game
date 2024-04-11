export enum PAGE_ROUTES {
  MAIN = '/',
  GAME = '/game',
  RESULT = '/result',
}

export enum GAME_MODES {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export enum GAME_MODES_GRID {
  EASY = '3x3',
  MEDIUM = '4x4',
  HARD = '5x5',
}

export enum LOSE_TYPES {
  TIME_LOSE = 'time',
  SELECT_LOSE = 'select',
}

export enum RESULTS {
  WIN = 'You are the Champ',
  TIME_LOSE = 'Time is up! Nice try',
  SELECT_LOSE = 'Wrong selection! Nice try',
}

export enum TIME_TEXT {
  TIMED = 'Timed',
  TIMELESS = 'Timeless',
}