import { light } from '@/themes/light'

declare global {
  type StyleConfig = typeof light
  export interface MyTheme extends StyleConfig {}
}
