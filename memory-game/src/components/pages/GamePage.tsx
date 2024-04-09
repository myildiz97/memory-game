import { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store'
import GameBoard from '../GameBoard';
import { generateGridValues, shuffleArray } from '@/utils/helpers';
import GameInfo from '../GameInfo';

interface IGamePageProps {
}

const GamePage: FC<IGamePageProps> = () => {
  const settings = useSelector((state: RootState) => state.settings);
  const { mode } = settings;
  
  const gridValues = useMemo(() => {
    return shuffleArray(generateGridValues(mode));
  }, [mode]);

  const game = useSelector((state: RootState) => state.game);
  const { currentPickedValue } = game;
  
  return (
    <div className='flex flex-col items-center justify-center gap-y-5 h-screen w-full'>
      <GameInfo />
      <div>
        <GameBoard gridValues={gridValues} mode={mode} />
      </div>
      <div>
        <p>{currentPickedValue}</p>
      </div>
    </div>
  );
};

export default GamePage;