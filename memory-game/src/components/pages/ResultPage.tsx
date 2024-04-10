import { FC } from 'react';
import Result from '../Result';
import NewGame from '../NewGame';
interface ResultPageProps {
}

const ResultPage: FC<ResultPageProps > = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center gap-y-5 h-screen w-full'>
      <Result />
      <NewGame />
    </div>
  );
};

export default ResultPage;






  
