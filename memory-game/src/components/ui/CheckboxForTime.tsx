import { FC } from 'react'
import { Checkbox } from './Checkbox'
import { Label } from './Label'

interface ICheckboxForTimeProps {
  handleCheckedChange: (checked: boolean) => void
}

const CheckboxForTime: FC<ICheckboxForTimeProps> = ({ handleCheckedChange }) => {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="game-time-checkbox" onCheckedChange={handleCheckedChange} />
      <Label htmlFor="game-time-checkbox">Time constraint</Label>
    </div>
  )
}

export default CheckboxForTime