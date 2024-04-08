import { FC } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store'

interface GamePageProps {
}

const GamePage: FC<GamePageProps> = () => {
  const settings = useSelector((state: RootState) => state.settings);

  return (
    <div>
      <div>
        <p>{settings.nickname}</p>
        <p>{settings.mode}</p>
        <p>{settings.time ? 'Time constraint' : 'No time constraint'}</p>
      </div>
    </div>
  );
};

export default GamePage;