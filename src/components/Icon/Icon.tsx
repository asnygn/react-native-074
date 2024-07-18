import { useTheme } from '@/hooks/useTheme'

import Person from '@/assets/svg/person.svg'

const iconMapping: { [key: string]: any } = {
  Person,
}

export type IconName = keyof typeof iconMapping

export type IconProps = {
  name: IconName
  color?: string
  size?: number
}

export const Icon = (props: IconProps) => {
  const { name, color, size = 20 } = props
  const { theme } = useTheme()

  const IconComponent = iconMapping[name]
  const iconColor = color || theme.icon.color

  if (IconComponent) {
    return <IconComponent width={size} height={size} color={iconColor} />
  }
}
