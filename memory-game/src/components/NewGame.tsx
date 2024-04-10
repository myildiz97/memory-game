import { FC } from 'react';
import { Button } from './ui/Button';
import { useNavigate } from 'react-router-dom';
import { PAGE_ROUTES } from '@/utils/types';

interface INewGameProps {
}

const NewGame: FC<INewGameProps> = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(PAGE_ROUTES.MAIN);
  };

  return (
    <div>
      <Button variant={'destructive'} onClick={handleClick}>New Game</Button>
    </div>
  );
};

export default NewGame;