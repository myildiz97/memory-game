import { FC, MouseEvent, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGameResult, setLevel, setScore, setTimerReset } from '@/redux/game/gameSlice';
import { GRID_CONFIGS } from '@/utils/constants';
import { RootState } from '@/app/store';
import { calculateNewScore } from '@/utils/helpers';
import { useNavigate } from 'react-router-dom';
import { LOSE_TYPES, PAGE_ROUTES, RESULTS } from '@/utils/types';
import Card from './Card';

interface IGameBoardProps {
  cardValues: string[];
}

const GameBoard: FC<IGameBoardProps> = ({ cardValues }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { score, randomCardValues, level, timerResetFlag, isTimeUp } = useSelector((state: RootState) => state.game);
  const { mode, time } = useSelector((state: RootState) => state.settings);

  const randomCardValuesRef = useRef<string[]>([]);

  useEffect(() => {
    randomCardValuesRef.current = randomCardValues;
  }, [randomCardValues]);

  const gameOver = (type: LOSE_TYPES) => {
    const result = type === LOSE_TYPES.TIME_LOSE ? RESULTS.TIME_LOSE : RESULTS.SELECT_LOSE;
    dispatch(setGameResult(result));
    navigate(PAGE_ROUTES.RESULT);
  };

  useEffect(() => {
    // If isTimeUp is true, then the game is over
    if (isTimeUp) {
      gameOver(LOSE_TYPES.TIME_LOSE);
    }
  }, [isTimeUp]);
  
  const onGridClick = (e: MouseEvent<HTMLDivElement>): void => {
    const value = e.currentTarget.textContent || '';
    
    const wantedValue = randomCardValuesRef.current[0];
    if (value === wantedValue) {
      randomCardValuesRef.current = randomCardValuesRef.current.slice(1);
      const newScore = calculateNewScore(score, mode, time);
      dispatch(setScore(newScore));

      if (randomCardValuesRef.current.length === 0) {
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
  
  return (
    <div className='border-2 border-gray-500 p-2 rounded-md' style={{ display: 'grid', placeItems: 'center', gridTemplateColumns: `repeat(${GRID_CONFIGS[mode].cols}, 1fr)`, gap: '1rem' }}>
      {cardValues.map((value, index) => (
        <Card key={index} value={value} onCardClick={onGridClick} />
      ))}
    </div>
  );
};

export default GameBoard;