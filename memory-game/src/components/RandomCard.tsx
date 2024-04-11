import { COLORS } from '@/utils/constants';
import { FC } from 'react';

interface IRandomCardProps {
  value: string;
}

const RandomCard: FC<IRandomCardProps> = ({ value }) => {
  return (
    <div 
      className='flex items-center justify-center m-1 w-full h-full'
    > 
      {
        COLORS.includes(value) ? (
          <div className='w-10 h-10 rounded-full bg-gray-400' style={{ backgroundColor: value, color: 'transparent' }}>
            {value}
          </div>
        ) : (
          <div className='w-10 h-10 rounded-full bg-gray-400 text-white font-bold text-lg flex items-center justify-center'>
            {value}
          </div>
        )
      }
    </div>
  );
};

export default RandomCard;