import { FC } from 'react';
import Settings from '../Settings';
import StartGame from '../StartGame';

interface IMainPageProps {
}

const MainPage: FC<IMainPageProps> = () => {

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-y-5">
      <Settings />
      <StartGame />
    </div>
  );
};

export default MainPage;