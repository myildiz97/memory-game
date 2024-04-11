import { INITIAL_MODE, INITIAL_MODE_GRID, INITIAL_NICKNAME, INITIAL_TIME, INITIAL_TIME_TEXT, SETTINGS_REDUCER_NAME } from '@/utils/constants';
import { getModeGrid } from '@/utils/helpers';
import { GAME_MODES, TIME_TEXT } from '@/utils/types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ISettingsState {
  nickname: string
  mode: GAME_MODES
  modeGrid: string
  time: boolean
  timeText: TIME_TEXT
}

const initialState: ISettingsState = {
  nickname: INITIAL_NICKNAME,
  mode: INITIAL_MODE,
  modeGrid: INITIAL_MODE_GRID,
  time: INITIAL_TIME,
  timeText: INITIAL_TIME_TEXT,
};

export const settingsSlice = createSlice({
  name: SETTINGS_REDUCER_NAME,
  initialState,
  reducers: {
    setNickname: (state, action: PayloadAction<string>) => {
      state.nickname = action.payload;
    },
    setMode: (state, action: PayloadAction<GAME_MODES>) => {
      state.mode = action.payload;
      state.modeGrid = getModeGrid(action.payload);
    },
    setTime: (state, action: PayloadAction<boolean>) => {
      state.time = action.payload;
      state.timeText = action.payload ? TIME_TEXT.TIMED : TIME_TEXT.TIMELESS;
    },
    resetSettings: (state) => {
      state.nickname = INITIAL_NICKNAME;
      state.mode = INITIAL_MODE;
      state.modeGrid = INITIAL_MODE_GRID;
      state.time = INITIAL_TIME;
      state.timeText = INITIAL_TIME_TEXT;
    },
  },
});

export const { setNickname, setMode, setTime, resetSettings } = settingsSlice.actions;

export default settingsSlice.reducer;