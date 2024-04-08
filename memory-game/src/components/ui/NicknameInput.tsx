import { FC } from 'react';
import { Input } from './Input';
import { Label } from './Label';
import { INITIAL_NICKNAME } from '@/utils/constants';
import { useDispatch } from 'react-redux';
import { setNickname } from '@/redux/settings/settingsSlice';

interface INicknameInputProps {
}

const NicknameInput: FC<INicknameInputProps> = () => {
  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setNickname(e.target.value))
  }
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor='nickname'>Nickname:</Label>
      <Input type='text' id='nickname' placeholder={INITIAL_NICKNAME} onChange={handleChange} />
    </div>
  )
}

export default NicknameInput;