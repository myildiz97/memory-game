import { ChangeEvent, FC } from 'react';
import { Input } from './ui/Input';
import { INITIAL_NICKNAME } from '@/utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setNickname } from '@/redux/settings/settingsSlice';
import { RootState } from '@/app/store';

interface INicknameInputProps {
}

const NicknameInput: FC<INicknameInputProps> = () => {
  const dispatch = useDispatch();
  const { nickname } = useSelector((state: RootState) => state.settings);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setNickname(e.target.value));
  };

  return (
    <div className="grid w-full max-w-sm items-center">
      <Input type='text' id='nickname' placeholder={INITIAL_NICKNAME} onChange={handleChange} value={nickname} />
    </div>
  );
};

export default NicknameInput;