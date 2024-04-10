import { FC } from 'react';
import GameResult from '../GameResult';

interface ResultPageProps {
}

const ResultPage: FC<ResultPageProps > = () => {
  return (
    <GameResult />
  );
};

export default ResultPage;