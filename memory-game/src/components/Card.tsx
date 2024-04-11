import { RootState } from '@/app/store';
import { COLORS } from '@/utils/constants';
import { getLevelTime } from '@/utils/helpers';
import { FC, MouseEvent, useEffect, useState  } from 'react';
import { useSelector } from 'react-redux';

interface ICardProps {
  value: string;
  onCardClick: (e: MouseEvent<HTMLDivElement>) => void
}

const Card: FC<ICardProps> = ({ value, onCardClick }) => {
  const { level } = useSelector((state: RootState) => state.game);
  const { mode } = useSelector((state: RootState) => state.settings);

  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    setIsVisible(true);
    const visibilityTime = getLevelTime(level, mode);
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, visibilityTime);

    return () => {
      clearTimeout(timeout);
    };
  }, [level, mode]);
  
  return (
    <div 
      className='flex items-center justify-center m-1 w-full h-full bg-gray-200 rounded-md shadow-md cursor-pointer hover:bg-gray-300 transition-colors duration-300 ease-in-out'
      onClick={onCardClick}
    > 
      {
        isVisible ? (
          COLORS.includes(value) ? (
            <div className='w-10 h-10 rounded-full bg-gray-400' style={{ backgroundColor: value, color: 'transparent' }}>
              {value}
            </div>
          ) : (
            <div className='w-10 h-10 rounded-full bg-gray-400 text-white font-bold text-lg flex items-center justify-center'>
              {value}
            </div>
          )
        ) : (
          <div className='w-10 h-10 rounded-full bg-gray-400 text-transparent font-bold text-lg flex items-center justify-center'>
            {value}
          </div>
        )
      }
    </div>
  );
};

export default Card;