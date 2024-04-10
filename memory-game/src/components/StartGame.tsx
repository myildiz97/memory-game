import { FC } from 'react';
import { Button } from './ui/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetGame } from '@/redux/game/gameSlice';
import { PAGE_ROUTES } from '@/utils/types';
import { RootState } from '@/app/store';
import { setNickname } from '@/redux/settings/settingsSlice';
import { INITIAL_NICKNAME } from '@/utils/constants';

interface IStartGameProps {
}

const StartGame: FC<IStartGameProps> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { nickname } = useSelector((state: RootState) => state.settings);

  const handleClick = () => {
    if (nickname === '') {
      dispatch(setNickname(INITIAL_NICKNAME));
    }
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