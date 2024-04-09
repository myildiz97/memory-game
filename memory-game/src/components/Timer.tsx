import { useState, useEffect, FC, useRef } from 'react';

interface ITimerProps {
  durationInSeconds: number;
}

const Timer: FC<ITimerProps> = ({ durationInSeconds }) => {
  const [seconds, setSeconds] = useState<number>(durationInSeconds);
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
        clearInterval(timer.current);
      }
    }
  }, [seconds]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div>
      <p>Time: <span style={{ color: seconds <= 10 ? 'red' : 'black' }}>{`${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`}</span></p>
    </div>
  );
};

export default Timer;