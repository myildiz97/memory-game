import { FC } from 'react'
import { Label } from './ui/Label'
import { Checkbox } from './ui/CheckBox'
import { useDispatch, useSelector } from 'react-redux'
import { setTime } from '@/redux/settings/settingsSlice'
import { RootState } from '@/app/store'

interface ICheckboxForTimeProps {
}

const CheckboxForTime: FC<ICheckboxForTimeProps> = () => {
  const dispatch = useDispatch()
  const settings = useSelector((state: RootState) => state.settings)
  const { time } = settings

  const handleCheckedChange = (checked: boolean) => {
    dispatch(setTime(checked))
  }

  return (
    <div className="flex items-center gap-2">
      <Checkbox id="game-time-checkbox" onCheckedChange={handleCheckedChange} checked={time} />
      <Label htmlFor="game-time-checkbox">Time constraint</Label>
    </div>
  )
}

export default CheckboxForTime