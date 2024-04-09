import { RootState } from '@/app/store';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import Timer from './Timer';

interface IGameInfoProps {
}

const GameInfo: FC<IGameInfoProps> = () => {
  const settings = useSelector((state: RootState) => state.settings);
  const { nickname, time } = settings;

  return (
    <div className='flex justify-between items-center w-full max-w-sm border border-gray-200 p-4 rounded-md' >
      <p className='font-bold'>{nickname}</p>
      <p>Score: <span className='text-blue-900 font-bold'>0</span></p>
      {!time &&  <Timer durationInSeconds={123} />}
    </div>
  );
};

export default GameInfo;