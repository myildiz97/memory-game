import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import GamePage from './components/pages/GamePage';
import ResultPage from './components/pages/ResultPage';
import { PAGE_ROUTES } from './utils/types';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PAGE_ROUTES.MAIN} element={<MainPage />} />
        <Route path={PAGE_ROUTES.GAME} element={<GamePage />} />
        <Route path={PAGE_ROUTES.RESULT} element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
