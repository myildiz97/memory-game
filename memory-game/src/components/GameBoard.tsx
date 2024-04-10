import { FC, MouseEvent, useEffect, useRef } from 'react';
import Grid from './Grid';
import { useDispatch, useSelector } from 'react-redux';
import { setGameResult, setLevel, setScore, setTimerReset } from '@/redux/game/gameSlice';
import { GRID_CONFIGS } from '@/utils/constants';
import { RootState } from '@/app/store';
import { calculateNewScore } from '@/utils/helpers';
import { useNavigate } from 'react-router-dom';
import { LOSE_TYPES, PAGE_ROUTES, RESULTS } from '@/utils/types';

interface IGameBoardProps {
  gridValues: string[];
}

const GameBoard: FC<IGameBoardProps> = ({ gridValues }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { score, randomGridValues, level, timerResetFlag, isTimeUp } = useSelector((state: RootState) => state.game);
  const { mode, time } = useSelector((state: RootState) => state.settings);

  const randomGridValuesRef = useRef<string[]>([]);

  const gameOver = (type: LOSE_TYPES) => {
    const result = type === LOSE_TYPES.TIME_LOSE ? RESULTS.TIME_LOSE : RESULTS.SELECT_LOSE;
    dispatch(setGameResult(result));
    navigate(PAGE_ROUTES.RESULT);
  };

  useEffect(() => {
    randomGridValuesRef.current = randomGridValues;
  }, [randomGridValues]);
  
  const onGridClick = (e: MouseEvent<HTMLDivElement>): void => {
    const value = e.currentTarget.textContent || '';
    
    const wantedValue = randomGridValuesRef.current[0];
    if (value === wantedValue) {
      randomGridValuesRef.current = randomGridValuesRef.current.slice(1);
      const newScore = calculateNewScore(score, mode, time);
      dispatch(setScore(newScore));

      if (randomGridValuesRef.current.length === 0) {
        const newLevel = level + 1;
        if (newLevel === 6) {
          dispatch(setGameResult(RESULTS.WIN));
          navigate(PAGE_ROUTES.RESULT);
          return;
        }
        dispatch(setLevel(newLevel));
        dispatch(setTimerReset(!timerResetFlag));
      }
    } else {
      gameOver(LOSE_TYPES.SELECT_LOSE);
    }
  };

  useEffect(() => {
    // If isTimeUp is true, then the game is over
    if (isTimeUp) {
      gameOver(LOSE_TYPES.TIME_LOSE);
    }
  }, [isTimeUp]);
  
  return (
    <div className={`border border-gray-200 p-4 rounded-md`} style={{ display: 'grid', gridTemplateColumns: `repeat(${GRID_CONFIGS[mode].cols}, 1fr)`, gap: '1rem' }}>
      {gridValues.map((value, index) => (
        <Grid key={index} value={value} onGridClick={onGridClick} isClickable={true} />
      ))}
    </div>
  );
};

export default GameBoard;