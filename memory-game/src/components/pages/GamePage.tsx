import { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store'
import GameBoard from '../GameBoard';
import { generateGridValues, shuffleArray } from '@/utils/helpers';
import GameInfo from '../GameInfo';
import GameChallenge from '../GameChallenge';

interface IGamePageProps {
}

const GamePage: FC<IGamePageProps> = () => {
  const settings = useSelector((state: RootState) => state.settings);
  const { mode } = settings;
  
  const gridValues = useMemo(() => {
    return shuffleArray(generateGridValues(mode));
  }, [mode]);

  return (
    <div className='flex flex-col items-center justify-center gap-y-5 h-screen w-full'>
      <GameInfo />
      <GameChallenge gridValues={gridValues} level={2} />
      <GameBoard gridValues={gridValues} mode={mode} />
    </div>
  );
};

export default GamePage;