import React from 'react'

import { light } from '@/themes/light'
import { dark } from '@/themes/dark'

type ProviderValue = {
  theme: MyTheme
  toggleTheme: () => void
}

export const ThemeContext = React.createContext<ProviderValue>({
  theme: light,
  toggleTheme: () => {
    console.log('ThemeProvider is not rendered!')
  },
})

type ThemeProviderProps = {
  initial: MyTheme
  children?: React.ReactNode
}

export const ThemeProvider = React.memo<ThemeProviderProps>((props) => {
  const [theme, setTheme] = React.useState<MyTheme>(props.initial)

  const toggleThemeCallback = React.useCallback(() => {
    setTheme((currentTheme) => {
      if (currentTheme.id === 'light') {
        return dark
      }
      if (currentTheme.id === 'dark') {
        return light
      }
      return currentTheme
    })
  }, [])

  const memoizedValue = React.useMemo(() => {
    const value: ProviderValue = {
      theme,
      toggleTheme: toggleThemeCallback,
    }
    return value
  }, [theme, toggleThemeCallback])

  return (
    <ThemeContext.Provider value={memoizedValue}>
      {props.children}
    </ThemeContext.Provider>
  )
})
