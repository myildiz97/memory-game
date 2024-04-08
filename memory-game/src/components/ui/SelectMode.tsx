import { FC } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './Select'
import { GAME_MODES_LIST } from '@/utils/constants'
import { useDispatch } from 'react-redux'
import { setMode } from '@/redux/settings/settingsSlice'
import { GAME_MODES } from '@/utils/types'

interface ISelectModeProps {
}

export const SelectMode: FC<ISelectModeProps> = () => {
  const dispatch = useDispatch()

  const handleValueChange = (value: GAME_MODES) => {
    dispatch(setMode(value))
  }

  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger>
        <SelectValue placeholder="Select a mode" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Grids</SelectLabel>
          {GAME_MODES_LIST.map((mode) => (
            <SelectItem key={mode.value} value={mode.value}>
              {mode.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
