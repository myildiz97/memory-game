import { FC } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PAGE_ROUTES } from './utils/constants';
import MainPage from './components/pages/MainPage';
import GamePage from './components/pages/GamePage';
import ResultPage from './components/pages/ResultPage';

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
