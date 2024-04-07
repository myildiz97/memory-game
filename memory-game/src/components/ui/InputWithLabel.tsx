import { FC } from 'react';
import { Input } from './Input';
import { Label } from './Label';
import { INPUT_TYPE } from '@/utils/constants';

interface IInputWithLabelProps {
  label: string;
  type: INPUT_TYPE;
  placeholder: string;
  id: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputWithLabel: FC<IInputWithLabelProps> = ({ label, type, placeholder, id, handleChange }) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} id={id} placeholder={placeholder} onChange={handleChange} />
    </div>
  )
}

export default InputWithLabel;