import { FC } from 'react';
import { Button } from './ui/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetCurrentPickedValue } from '@/redux/game/gameSlice';

interface IStartGameProps {
}

const StartGame: FC<IStartGameProps> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate('/game');
    dispatch(resetCurrentPickedValue());
  }

  return (
    <div>
      <Button variant={'destructive'} onClick={handleClick}>Start Game</Button>
    </div>
  );
};

export default StartGame;