import { GAME_REDUCER_NAME, INITIAL_DURATION, INITIAL_IS_TIME_UP, INITIAL_LEVEL, INITIAL_RANDOM_GRID_VALUES, INITIAL_RESULT, INITIAL_SCORE, INITIAL_TIMER_RESET } from '@/utils/constants';
import { RESULTS } from '@/utils/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IGameStates {
  randomCardValues: string[];
  level: number;
  score: number;
  isTimeUp: boolean;
  durationInSeconds: number;
  timerResetFlag: boolean;
  result: RESULTS;
}

const initialState: IGameStates = {
  randomCardValues: INITIAL_RANDOM_GRID_VALUES,
  level: INITIAL_LEVEL,
  score: INITIAL_SCORE,
  isTimeUp: INITIAL_IS_TIME_UP,
  durationInSeconds: INITIAL_DURATION,
  timerResetFlag: INITIAL_TIMER_RESET,
  result: INITIAL_RESULT,
};

export const gameSlice = createSlice({
  name: GAME_REDUCER_NAME,
  initialState,
  reducers: {
    setRandomCardValues: (state, action: PayloadAction<string[]>) => {
      state.randomCardValues = action.payload;
    },
    resetRandomCardValues: (state) => {
      state.randomCardValues = INITIAL_RANDOM_GRID_VALUES;
    },
    setLevel: (state, action: PayloadAction<number>) => {
      state.level = action.payload;
    },
    resetLevel: (state) => {
      state.level = INITIAL_LEVEL;
    },
    setScore: (state, action: PayloadAction<number>) => {
      state.score = action.payload;
    },
    resetScore: (state) => {
      state.score = INITIAL_SCORE;
    },
    setGameTimeUp: (state, action: PayloadAction<boolean>) => {
      state.isTimeUp = action.payload;
    },
    resetGameTimeUp: (state) => {
      state.isTimeUp = INITIAL_IS_TIME_UP;
    },
    setGameDuration: (state, action: PayloadAction<number>) => {
      state.durationInSeconds = action.payload;
    },
    resetGameDuration: (state) => {
      state.durationInSeconds = INITIAL_DURATION;
    },
    setTimerReset: (state, action: PayloadAction<boolean>) => {
      state.timerResetFlag = action.payload;
    },
    resetTimerReset: (state) => {
      state.timerResetFlag = INITIAL_TIMER_RESET;
    },
    setGameResult: (state, action: PayloadAction<RESULTS>) => {
      state.result = action.payload;
    },
    resetGameResult: (state) => {
      state.result = INITIAL_RESULT;
    },
    resetGame: (state) => {
      state.randomCardValues = INITIAL_RANDOM_GRID_VALUES;
      state.level = INITIAL_LEVEL;
      state.score = INITIAL_SCORE;
      state.isTimeUp = INITIAL_IS_TIME_UP;
      state.durationInSeconds = INITIAL_DURATION;
      state.timerResetFlag = INITIAL_TIMER_RESET;
      state.result = INITIAL_RESULT;
    },
  },
});

export const { setRandomCardValues, resetRandomCardValues, setLevel, resetLevel, setScore, resetScore, setGameTimeUp, resetGameTimeUp,setGameDuration, resetGameDuration, setGameResult, resetGameResult, setTimerReset, resetTimerReset, resetGame } = gameSlice.actions;

export default gameSlice.reducer;