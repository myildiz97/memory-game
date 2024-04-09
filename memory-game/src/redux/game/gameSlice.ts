import { GAME_REDUCER_NAME, INITIAL_CURRENT_PICKED_VALUE } from '@/utils/constants';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IGameStates {
  currentPickedValue: string;
}

const initialState: IGameStates = {
  currentPickedValue: INITIAL_CURRENT_PICKED_VALUE
}

export const gameSlice = createSlice({
  name: GAME_REDUCER_NAME,
  initialState,
  reducers: {
    setCurrentPickedValue: (state, action: PayloadAction<string>) => {
      state.currentPickedValue = action.payload
    },
    resetCurrentPickedValue: (state) => {
      state.currentPickedValue = INITIAL_CURRENT_PICKED_VALUE
    }
  },
})

export const { setCurrentPickedValue, resetCurrentPickedValue } = gameSlice.actions

export default gameSlice.reducer