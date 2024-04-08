import { FC } from 'react';
import { Input } from './Input';
import { Label } from './Label';
import { INITIAL_NICKNAME } from '@/utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setNickname } from '@/redux/settings/settingsSlice';
import { RootState } from '@/app/store';

interface INicknameInputProps {
}

const NicknameInput: FC<INicknameInputProps> = () => {
  const dispatch = useDispatch()
  const settings = useSelector((state: RootState) => state.settings);
  const { nickname } = settings;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setNickname(e.target.value))
  }

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor='nickname'>Nickname:</Label>
      <Input type='text' id='nickname' placeholder={INITIAL_NICKNAME} onChange={handleChange} value={nickname} />
    </div>
  )
}

export default NicknameInput;