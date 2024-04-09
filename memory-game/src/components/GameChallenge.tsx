import { getRandomGridValues } from '@/utils/helpers';
import { FC } from 'react';
import Grid from './Grid';

interface IGameChallengeProps {
  gridValues: string[];
  level: number;
}

const GameChallenge: FC<IGameChallengeProps> = ({ gridValues, level }) => {
  const randomGridValues = getRandomGridValues(gridValues, level);
  const columnNumber = level > 9 ? 9 : level;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columnNumber}, 1fr)`, gap: '1rem' }}>
      {randomGridValues.map((value, index) => (
        <Grid key={index} value={value} />
      ))}
    </div>
  );
};

export default GameChallenge;