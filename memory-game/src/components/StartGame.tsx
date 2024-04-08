import { FC } from 'react';
import { Button } from './ui/Button';
import { useNavigate } from 'react-router-dom';

interface IStartGameProps {
}

const StartGame: FC<IStartGameProps> = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/game');
  }

  return (
    <div>
      <Button variant={'destructive'} onClick={handleClick}>Start Game</Button>
    </div>
  );
};

export default StartGame;