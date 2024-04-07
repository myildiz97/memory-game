import { FC } from 'react';
import { Button } from '@/components/ui/Button';

interface MainPageProps {
}

const MainPage: FC<MainPageProps> = () => {
  const handleClick = () => {
    console.log('Button clicked');
  }

  return (
    <div>
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
};

export default MainPage;