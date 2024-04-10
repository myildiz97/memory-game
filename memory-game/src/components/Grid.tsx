import { RootState } from '@/app/store';
import { COLORS } from '@/utils/constants';
import { FC, MouseEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface IGridProps {
  value: string;
  onGridClick?: (e: MouseEvent<HTMLDivElement>) => void;
  isClickable?: boolean;
}

const Grid: FC<IGridProps> = ({ value, onGridClick, isClickable }) => {
  const { level } = useSelector((state: RootState) => state.game);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    if (onGridClick) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
  
      return () => clearTimeout(timer);
    }
  }, [onGridClick]);

  useEffect(() => {
    setIsVisible(true);
  }, [level]);

  const gridClassNames = `w-10 h-10 rounded-full font-bold text-lg flex items-center justify-center ${COLORS.includes(value) ? 'bg-gray-400' : 'text-white bg-gray-400'}`;
  const containerClassNames = `flex items-center justify-center m-1 w-full h-full ${isClickable && 'bg-gray-200 rounded-md shadow-md cursor-pointer hover:bg-gray-300 transition-colors duration-300 ease-in-out'}`;

  return (
    <div className={containerClassNames} onClick={onGridClick}>
      { isVisible ? (
        <div className={gridClassNames} style={{ backgroundColor: COLORS.includes(value) ? value : undefined, color: COLORS.includes(value) ? 'transparent' : undefined }}>
          {value}
        </div>
      ) : (
        <div className={`${gridClassNames} text-transparent`}>
          {value}  
        </div>
      )}
    </div>
  );
};

export default Grid;