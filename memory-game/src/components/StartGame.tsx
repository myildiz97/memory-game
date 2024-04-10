import { FC } from 'react';
import { Button } from './ui/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetGame } from '@/redux/game/gameSlice';
import { PAGE_ROUTES } from '@/utils/types';

interface IStartGameProps {
}

const StartGame: FC<IStartGameProps> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetGame());
    navigate(PAGE_ROUTES.GAME);
  };

  return (
    <div>
      <Button variant={'destructive'} onClick={handleClick}>Start Game</Button>
    </div>
  );
};

export default StartGame;