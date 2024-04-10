import { RootState } from '@/app/store';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import Timer from './Timer';

interface IGameInfoProps {
}

const GameInfo: FC<IGameInfoProps> = () => {
  const { nickname, time } = useSelector((state: RootState) => state.settings);
  const { level, score } = useSelector((state: RootState) => state.game);

  return (
    <div className='flex justify-between items-center w-full max-w-sm border border-gray-200 p-4 rounded-md' >
      <p className='font-bold'>{nickname}</p>
      <p>Level: <span className='text-blue-900 font-bold'>{level}</span></p>
      <p>Score: <span className='text-blue-900 font-bold'>{score}</span></p>
      {time &&  <Timer />}
    </div>
  );
};

export default GameInfo;