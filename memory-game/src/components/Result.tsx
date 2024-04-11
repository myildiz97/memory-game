import { RootState } from '@/app/store';
import { FC } from 'react';
import { useSelector } from 'react-redux';

interface IResultProps {
}

const Result: FC<IResultProps> = () => {
  const { nickname, modeGrid, timeText } = useSelector((state: RootState) => state.settings);
  const { result, score, level } = useSelector((state: RootState) => state.game);
  

  return (
    <div className='font-bold bg-gray-100 border-2 border-gray-500 p-4 rounded-md'>
      <p>{result + ' ' + nickname + '!'}</p>
      <p>Mode: <span className='text-red-500'>{modeGrid}</span> <span className='text-gray-400'>|</span> <span className='text-red-500'>{timeText}</span></p>
      <p>Level: <span className='text-green-500'>{level}</span></p>
      <p>Score: <span className='text-blue-500'>{score}</span></p>
    </div>
  );
};

export default Result;