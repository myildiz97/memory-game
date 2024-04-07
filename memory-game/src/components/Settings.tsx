import { FC } from 'react'
import InputWithLabel from './ui/InputWithLabel'
import { INPUT_TYPE } from '@/utils/constants'
import { SelectMode } from './ui/SelectMode'
import CheckboxForTime from './ui/CheckboxForTime'

interface ISettingsProps {
}

const Settings: FC<ISettingsProps> = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  const handleValueChange = (value: string) => {
    console.log(value)
  }

  const handleCheckedChange = (checked: boolean) => {
    console.log(checked)
  }

  return (
    <div className="flex flex-col items-center justify-center gap-y-2">
      <InputWithLabel label="Nickname:" type={INPUT_TYPE.text} placeholder="Player" id="nickname" handleChange={handleChange} />
      <SelectMode handleValueChange={handleValueChange} />
      <CheckboxForTime handleCheckedChange={handleCheckedChange} />
    </div>
  )
}

export default Settings