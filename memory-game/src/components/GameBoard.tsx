import { FC, MouseEvent } from 'react';
import Grid from './Grid';
import { useDispatch } from 'react-redux';
import { setCurrentPickedValue } from '@/redux/game/gameSlice';
import { GAME_MODES } from '@/utils/types';

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
    mode === GAME_MODES.EASY ? (
      <div className="grid grid-cols-3 gap-3 w-56 h-56 border border-gray-200 p-4 rounded-md">
        {gridValues.map((value, index) => (
          <Grid key={index} value={value} onGridClick={onGridClick} />
        ))}
      </div>
    ) : mode === GAME_MODES.MEDIUM ? (
      <div className="grid grid-cols-4 gap-3 w-80 h-80 border border-gray-200 p-4 rounded-md">
        {gridValues.map((value, index) => (
          <Grid key={index} value={value} onGridClick={onGridClick} />
        ))}
      </div>
    ) : (
      <div className="grid grid-cols-5 gap-3 w-96 h-96 border border-gray-200 p-4 rounded-md">
        {gridValues.map((value, index) => (
          <Grid key={index} value={value} onGridClick={onGridClick} />
        ))}
      </div>
    )
  )    
}

export default GameBoard;