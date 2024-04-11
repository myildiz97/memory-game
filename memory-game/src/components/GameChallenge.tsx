import { getModeLevel, getRandomCardValues } from '@/utils/helpers';
import { FC, useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRandomCardValues } from '@/redux/game/gameSlice';
import { RootState } from '@/app/store';
import { INITIAL_LEVEL } from '@/utils/constants';
import RandomCard from './RandomCard';

interface IGameChallengeProps {
  gridValues: string[];
}

const GameChallenge: FC<IGameChallengeProps> = ({ gridValues }) => {
  const dispatch = useDispatch();
  const { level } = useSelector((state: RootState) => state.game);
  const { mode } = useSelector((state: RootState) => state.settings);

  const levelOfModeRef = useRef<number>(INITIAL_LEVEL);
  
  const randomCardValues = useMemo(() => {
    const levelOfMode = getModeLevel(mode, level);
    levelOfModeRef.current = levelOfMode;
    return getRandomCardValues(gridValues, levelOfMode);
  }, [gridValues, level, mode]);

  useEffect(() => {
    dispatch(setRandomCardValues(randomCardValues));
  }, [dispatch, randomCardValues]);
  
  const columnNumber = levelOfModeRef.current > 6 ? 6 : levelOfModeRef.current;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columnNumber}, 1fr)`, gap: '1rem' }}>
      {randomCardValues.map((value, index) => (
        <RandomCard key={index} value={value} />
      ))}
    </div>
  );
};

export default GameChallenge;