import React from 'react'

import { useTheme } from './useTheme'

type Generator<T extends {}> = (theme: MyTheme) => T

export const useStyle = <T extends {}>(fn: Generator<T>) => {
  const { theme } = useTheme()
  const styles = React.useMemo(() => fn(theme), [fn, theme])
  return styles
}
