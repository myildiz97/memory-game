import { FC } from 'react';
import NewGame from './NewGame';
import Result from './Result';

interface IGameResultProps {
}

const GameResult: FC<IGameResultProps> = () => {

  return (
    <div className='flex flex-col items-center justify-center text-center gap-y-5 h-screen w-full'>
      <Result />
      <NewGame />
    </div>
  );
};

export default GameResult;