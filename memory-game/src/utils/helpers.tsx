import { CARD_VISIBILITY_TIMES_WRT_LEVEL, GAME_MODES_LIST, LEVELS, SCORES, TIMER_DURATION_WRT_LEVEL } from './constants';
import { GAME_MODES, GAME_MODES_GRID } from './types';

export const shuffleArray = (array: string[]): string[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const generateCardValues = (mode: GAME_MODES): string[] => {
  let gridValues: string[] = [];
  let list;
  switch (mode) {
    case GAME_MODES.EASY:
      list = GAME_MODES_LIST[0].list;
      gridValues = [...list.numbers].concat([...list.alphabets]).concat([...list.colors]);
      break;
    case GAME_MODES.MEDIUM:
      list = GAME_MODES_LIST[1].list;
      gridValues = [...list.numbers].concat([...list.alphabets]).concat([...list.colors]);
      break;
    case GAME_MODES.HARD:
      list = GAME_MODES_LIST[2].list;
      gridValues = [...list.numbers].concat([...list.alphabets]).concat([...list.colors]);
      break;
    default:
      list = GAME_MODES_LIST[0].list;
      gridValues = [...list.numbers].concat([...list.alphabets]).concat([...list.colors]);
      break;
  }
  return gridValues;
};

export const getModeLevel = (mode: GAME_MODES, level: number): number => {
  return LEVELS[mode][level as keyof typeof LEVELS.easy];
};

export const getRandomCardValues = (gridValues: string[], levelOfMode: number): string[] => {
  const randomGridValues: string[] = [];

  while (randomGridValues.length < levelOfMode) {
    const randomIndex = Math.floor(Math.random() * gridValues.length);
    const randomValue = gridValues[randomIndex];
    if (!randomGridValues.includes(randomValue)) {
      randomGridValues.push(randomValue);
    }
  }
  return randomGridValues;
};

export const calculateNewScore = (score: number, mode: GAME_MODES, isTimed: boolean): number => {
  const newScore = isTimed ? score + SCORES[mode].timed : score + SCORES[mode].timeless;
  return newScore;
};

export const getModeGrid = (mode: GAME_MODES): string => {
  let modeGrid = '';
  switch (mode) {
    case GAME_MODES.EASY:
      modeGrid = GAME_MODES_GRID.EASY;
      break;
    case 'medium':
      modeGrid = GAME_MODES_GRID.MEDIUM;
      break;
    case 'hard':
      modeGrid = GAME_MODES_GRID.HARD;
      break;
    default:
      modeGrid = '';
      break;
  }

  return modeGrid;
};

export const getLevelTime = (level: number, mode: GAME_MODES): number => {
  let time = 0;
  switch (mode) {
    case GAME_MODES.EASY:
      time = CARD_VISIBILITY_TIMES_WRT_LEVEL.easy[level as keyof typeof CARD_VISIBILITY_TIMES_WRT_LEVEL.easy];
      break;
    case GAME_MODES.MEDIUM:
      time = CARD_VISIBILITY_TIMES_WRT_LEVEL.medium[level as keyof typeof CARD_VISIBILITY_TIMES_WRT_LEVEL.medium];
      break;
    case GAME_MODES.HARD:
      time = CARD_VISIBILITY_TIMES_WRT_LEVEL.hard[level as keyof typeof CARD_VISIBILITY_TIMES_WRT_LEVEL.hard];
      break;
    default:
      time = CARD_VISIBILITY_TIMES_WRT_LEVEL.easy[level as keyof typeof CARD_VISIBILITY_TIMES_WRT_LEVEL.easy];
      break;
  }
  return time;
};

export const getTimerDuration = (level: number, mode: GAME_MODES): number => {
  let duration = 0;
  switch (mode) {
    case GAME_MODES.EASY:
      duration = TIMER_DURATION_WRT_LEVEL.easy[level as keyof typeof TIMER_DURATION_WRT_LEVEL.easy];
      break;
    case GAME_MODES.MEDIUM:
      duration = TIMER_DURATION_WRT_LEVEL.medium[level as keyof typeof TIMER_DURATION_WRT_LEVEL.medium];
      break;
    case GAME_MODES.HARD:
      duration = TIMER_DURATION_WRT_LEVEL.hard[level as keyof typeof TIMER_DURATION_WRT_LEVEL.hard];
      break;
    default:
      duration = TIMER_DURATION_WRT_LEVEL.easy[level as keyof typeof TIMER_DURATION_WRT_LEVEL.easy];
      break;
  }
  return duration;
};