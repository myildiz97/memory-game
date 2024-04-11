import { FC } from 'react';
import { SelectMode } from './SelectMode';
import CheckboxForTime from './CheckboxForTime';
import NicknameInput from './NicknameInput';

interface ISettingsProps {
}

const Settings: FC<ISettingsProps> = () => {  
  return (
    <div className="flex flex-col items-center justify-center gap-y-2 bg-gray-100 border-2 border-gray-500 p-4 rounded-md">
      <NicknameInput />
      <SelectMode />
      <CheckboxForTime />
    </div>
  );
};

export default Settings;