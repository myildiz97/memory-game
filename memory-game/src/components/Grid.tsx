import { COLORS } from '@/utils/constants';
import { FC, MouseEvent } from 'react';

interface IGridProps {
  value: string;
  onGridClick: (e: MouseEvent<HTMLDivElement>) => void;
}

const Grid: FC<IGridProps> = ({ value, onGridClick }) => {
  
  return (
    <div 
      className='flex items-center justify-center w-full h-full bg-gray-200 rounded-md shadow-md cursor-pointer hover:bg-gray-300 transition-colors duration-300 ease-in-out'
      onClick={onGridClick}
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
  )
}

export default Grid;