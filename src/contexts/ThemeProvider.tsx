import React from 'react'

import { usePersistStore } from '@/stores'
import { themes } from '@/themes'

type ProviderValue = {
  theme: MyTheme
  changeTheme: (name: 'light' | 'dark') => void
  toggleTheme: () => void
}

export const ThemeContext = React.createContext<ProviderValue>({
  theme: themes.light,
  changeTheme: () => {
    console.log('ThemeProvider is not rendered!')
  },
  toggleTheme: () => {
    console.log('ThemeProvider is not rendered!')
  },
})

type ThemeProviderProps = {
  initial: MyTheme
  children?: React.ReactNode
}

export const ThemeProvider = React.memo<ThemeProviderProps>((props) => {
  const [themeConfig, setThemeConfig] = React.useState<MyTheme>(props.initial)
  const { setTheme } = usePersistStore()

  const toggleThemeCallback = React.useCallback(() => {
    setThemeConfig((currentTheme) => {
      if (currentTheme.id === 'light') {
        setTheme('dark')
        return themes.dark
      }
      if (currentTheme.id === 'dark') {
        setTheme('light')
        return themes.light
      }
      return currentTheme
    })
  }, [])

  const changeThemeCallback = React.useCallback((themeName: any) => {
    if (themeName === 'light') {
      setThemeConfig(themes.light)
      setTheme('light')
    }
    if (themeName === 'dark') {
      setThemeConfig(themes.dark)
      setTheme('dark')
    }
  }, [])

  const memoizedValue = React.useMemo(() => {
    const value: ProviderValue = {
      theme: themeConfig,
      changeTheme: changeThemeCallback,
      toggleTheme: toggleThemeCallback,
    }
    return value
  }, [themeConfig, changeThemeCallback, toggleThemeCallback])

  return (
    <ThemeContext.Provider value={memoizedValue}>
      {props.children}
    </ThemeContext.Provider>
  )
})
