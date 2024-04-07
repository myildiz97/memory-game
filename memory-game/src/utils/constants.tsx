export enum PAGE_ROUTES {
  MAIN = '/',
  GAME = '/game',
  RESULT = '/result',
}

export enum INPUT_TYPE {
  text = 'text',
  number = 'number',
  email = 'email',
  password = 'password',
  tel = 'tel',
  url = 'url',
  search = 'search',
  date = 'date',
  time = 'time',
  datetimeLocal = 'datetime-local',
  month = 'month',
  week = 'week',
  color = 'color',
  file = 'file',
  hidden = 'hidden',
  image = 'image',
  range = 'range',
  reset = 'reset',
  submit = 'submit',
  button = 'button',
  checkbox = 'checkbox',
  radio = 'radio',
  select = 'select',
  textarea = 'textarea',
}

export const GAME_MODES = [
  { value: 'easy', label: '3x3' },
  { value: 'medium', label: '4x4' },
  { value: 'hard', label: '5x5' },
];