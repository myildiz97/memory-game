import { INITIAL_MODE, INITIAL_NICKNAME, INITIAL_TIME, SETTINGS_REDUCER_NAME } from '@/utils/constants'
import { GAME_MODES } from '@/utils/types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ISettingsState {
  nickname: string
  mode: GAME_MODES
  time: boolean
}

const initialState: ISettingsState = {
  nickname: INITIAL_NICKNAME,
  mode: INITIAL_MODE,
  time: INITIAL_TIME,
}

export const settingsSlice = createSlice({
  name: SETTINGS_REDUCER_NAME,
  initialState,
  reducers: {
    setNickname: (state, action: PayloadAction<string>) => {
      if (action.payload.length === 0) {
        state.nickname = INITIAL_NICKNAME;
        return;
      }
      state.nickname = action.payload
    },
    setMode: (state, action: PayloadAction<GAME_MODES>) => {
      state.mode = action.payload
    },
    setTime: (state, action: PayloadAction<boolean>) => {
      state.time = action.payload
    },
  },
})

export const { setNickname, setMode, setTime } = settingsSlice.actions

export default settingsSlice.reducer