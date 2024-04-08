import { FC } from 'react';
import Settings from '../Settings';
import StartGame from '../StartGame';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store'

interface IMainPageProps {
}

const MainPage: FC<IMainPageProps> = () => {
  const settings = useSelector((state: RootState) => state.settings);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-y-5">
      <Settings />
      <StartGame />
      <div>
        <p>{settings.nickname}</p>
        <p>{settings.mode}</p>
        <p>{settings.time ? 'Time constraint' : 'No time constraint'}</p>
      </div>
    </div>
  );
};

export default MainPage;