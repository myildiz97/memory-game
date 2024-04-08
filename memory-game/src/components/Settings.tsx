import { FC } from 'react'
import { SelectMode } from './ui/SelectMode'
import CheckboxForTime from './ui/CheckboxForTime'
import NicknameInput from './ui/NicknameInput'

interface ISettingsProps {
}

const Settings: FC<ISettingsProps> = () => {  
  return (
    <div className="flex flex-col items-center justify-center gap-y-2">
      <NicknameInput />
      <SelectMode />
      <CheckboxForTime />
    </div>
  )
}

export default Settings