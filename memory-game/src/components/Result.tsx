import { RootState } from '@/app/store';
import { GAME_MODES, GAME_MODES_GRID } from '@/utils/types';
import { FC } from 'react';
import { useSelector } from 'react-redux';

interface IResultProps {
}

const Result: FC<IResultProps> = () => {
  const { nickname, mode, time } = useSelector((state: RootState) => state.settings);
  const { result, score, level } = useSelector((state: RootState) => state.game);
  
  let modeText = '';
  switch (mode) {
    case GAME_MODES.EASY:
      modeText = GAME_MODES_GRID.EASY;
      break;
    case 'medium':
      modeText = GAME_MODES_GRID.MEDIUM;
      break;
    case 'hard':
      modeText = GAME_MODES_GRID.HARD;
      break;
    default:
      modeText = '';
      break;
  }

  return (
    <div className='font-bold'>
      <p>{result + ' ' + nickname + '!'}</p>
      <p>Mode: <span className='text-red-500'>{modeText}</span> <span className='text-gray-400'>|</span> <span className='text-red-500'>{time ? 'Timed' : 'Timeless'}</span></p>
      <p>Level: <span className='text-green-500'>{level}</span></p>
      <p>Score: <span className='text-blue-500'>{score}</span></p>
    </div>
  );
};

export default Result;