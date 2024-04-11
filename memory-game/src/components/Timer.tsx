import { RootState } from '@/app/store';
import { setGameTimeUp } from '@/redux/game/gameSlice';
import { getTimerDuration } from '@/utils/helpers';
import { useState, useEffect, FC, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface ITimerProps {
}

const Timer: FC<ITimerProps> = () => {
  const dispatch = useDispatch();
  const { timerResetFlag, level } = useSelector((state: RootState) => state.game);
  const { mode } = useSelector((state: RootState) => state.settings);

  const [seconds, setSeconds] = useState<number>(getTimerDuration(level, mode));
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, []);

  useEffect(() => {
    if (seconds <= 0) {
      if (timer.current) {
        dispatch(setGameTimeUp(true));
        clearInterval(timer.current);
      }
    }
  }, [seconds, dispatch]);

  useEffect(() => {
    const timerDuration = getTimerDuration(level, mode);
    setSeconds(timerDuration);
  }, [timerResetFlag, level, mode]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div>
      <p>Time: <span style={{ color: seconds <= 10 ? 'red' : 'black' }}>{`${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`}</span></p>
    </div>
  );
};

export default Timer;