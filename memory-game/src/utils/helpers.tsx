import { GAME_MODES_LIST, LEVELS, SCORES } from './constants';
import { GAME_MODES } from './types';

export const shuffleArray = (array: string[]): string[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const generateGridValues = (mode: GAME_MODES): string[] => {
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

export const getRandomGridValues = (gridValues: string[], levelOfMode: number): string[] => {
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