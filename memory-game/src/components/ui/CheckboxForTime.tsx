import { FC } from 'react'
import { Label } from './Label'
import { Checkbox } from './CheckBox'
import { useDispatch } from 'react-redux'
import { setTime } from '@/redux/settings/settingsSlice'

interface ICheckboxForTimeProps {
}

const CheckboxForTime: FC<ICheckboxForTimeProps> = () => {
  const dispatch = useDispatch()

  const handleCheckedChange = (checked: boolean) => {
    dispatch(setTime(checked))
  }

  return (
    <div className="flex items-center gap-2">
      <Checkbox id="game-time-checkbox" onCheckedChange={handleCheckedChange} />
      <Label htmlFor="game-time-checkbox">Time constraint</Label>
    </div>
  )
}

export default CheckboxForTime