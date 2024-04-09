import { FC, MouseEvent } from 'react';
import Grid from './Grid';
import { useDispatch } from 'react-redux';
import { setCurrentPickedValue } from '@/redux/game/gameSlice';
import { GAME_MODES } from '@/utils/types';
import { GRID_CONFIGS } from '@/utils/constants';

interface IGameBoardProps {
  gridValues: string[];
  mode: GAME_MODES;
}

const GameBoard: FC<IGameBoardProps> = ({ gridValues, mode }) => {
  const dispatch = useDispatch()
  
  const onGridClick = (e: MouseEvent<HTMLDivElement>) => {
    const value = e.currentTarget.textContent || ''
    dispatch(setCurrentPickedValue(value))
  }
  
  return (
    <div className={`grid grid-cols-${GRID_CONFIGS[mode].cols} gap-3 ${GRID_CONFIGS[mode].size} border border-gray-200 p-4 rounded-md`}>
      {gridValues.map((value, index) => (
        <Grid key={index} value={value} onGridClick={onGridClick} isClickable={true} />
      ))}
    </div>
  )
}

export default GameBoard;