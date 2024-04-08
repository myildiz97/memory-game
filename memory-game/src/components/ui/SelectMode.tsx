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
import { useDispatch, useSelector } from 'react-redux'
import { setMode } from '@/redux/settings/settingsSlice'
import { GAME_MODES } from '@/utils/types'
import { RootState } from '@/app/store'

interface ISelectModeProps {
}

export const SelectMode: FC<ISelectModeProps> = () => {
  const dispatch = useDispatch()
  const settings = useSelector((state: RootState) => state.settings)
  const { mode } = settings

  const handleValueChange = (value: GAME_MODES) => {
    dispatch(setMode(value))
  }

  return (
    <Select onValueChange={handleValueChange} defaultValue={GAME_MODES_LIST[0].value} value={mode}>
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
