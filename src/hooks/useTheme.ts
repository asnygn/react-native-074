import React from 'react'

import { ThemeContext } from '@/contexts/ThemeProvider'

export const useTheme = () => React.useContext(ThemeContext)
