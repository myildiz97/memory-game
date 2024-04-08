import { FC } from 'react';
import { Button } from './ui/Button';
import { useNavigate } from 'react-router-dom';
import { resetSettings } from '@/redux/settings/settingsSlice';

interface IStartGameProps {
}

const StartGame: FC<IStartGameProps> = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // If the user starts the game, reset the settings
    resetSettings();
    navigate('/game');
  }

  return (
    <div>
      <Button variant={'destructive'} onClick={handleClick}>Start Game</Button>
    </div>
  );
};

export default StartGame;