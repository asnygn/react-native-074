import { light } from './light'

export const dark = {
  ...light,
  id: 'dark',
  app: {
    screenPadding: 16,
    backgroundColor: '#000000',
    borderColor: '#dadada',
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
}
