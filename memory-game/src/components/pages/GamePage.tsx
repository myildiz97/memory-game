import { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import GameBoard from '../GameBoard';
import { generateCardValues, shuffleArray } from '@/utils/helpers';
import GameInfo from '../GameInfo';
import GameChallenge from '../GameChallenge';

interface IGamePageProps {
}

const GamePage: FC<IGamePageProps> = () => {
  const { mode } = useSelector((state: RootState) => state.settings);
  const { level } = useSelector((state: RootState) => state.game);
  
  const cardValues = useMemo(() => {
    return shuffleArray(generateCardValues(mode));
  }, [mode, level]);

  return (
    <div className='flex flex-col items-center justify-center gap-y-5 h-screen w-full'>
      <GameInfo />
      <GameChallenge gridValues={cardValues} />
      <GameBoard cardValues={cardValues} />
    </div>
  );
};

export default GamePage;