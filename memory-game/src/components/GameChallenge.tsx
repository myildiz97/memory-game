import { getModeLevel, getRandomGridValues } from '@/utils/helpers';
import { FC, useEffect, useMemo, useRef } from 'react';
import Grid from './Grid';
import { useDispatch, useSelector } from 'react-redux';
import { setRandomGridValues } from '@/redux/game/gameSlice';
import { RootState } from '@/app/store';
import { INITIAL_LEVEL } from '@/utils/constants';

interface IGameChallengeProps {
  gridValues: string[];
}

const GameChallenge: FC<IGameChallengeProps> = ({ gridValues }) => {
  const dispatch = useDispatch();
  const { level } = useSelector((state: RootState) => state.game);
  const { mode } = useSelector((state: RootState) => state.settings);

  const levelOfModeRef = useRef<number>(INITIAL_LEVEL);
  
  const randomGridValues = useMemo(() => {
    const levelOfMode = getModeLevel(mode, level);
    levelOfModeRef.current = levelOfMode;
    return getRandomGridValues(gridValues, levelOfMode);
  }, [gridValues, level, mode]);

  useEffect(() => {
    dispatch(setRandomGridValues(randomGridValues));
  }, [dispatch, randomGridValues]);
  
  const columnNumber = levelOfModeRef.current > 6 ? 6 : levelOfModeRef.current;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columnNumber}, 1fr)`, gap: '1rem' }}>
      {randomGridValues.map((value, index) => (
        <Grid key={index} value={value} />
      ))}
    </div>
  );
};

export default GameChallenge;