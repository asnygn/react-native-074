import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

import RootNavigation from '@/navigation/RootNavigation'
import { usePersistStore } from '@/stores'
import { ThemeProvider } from '@/contexts/ThemeProvider'
import { themes } from '@/themes'

export default function App(): JSX.Element {
  const persistStore = usePersistStore()
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider initial={themes[persistStore.theme]}>
        <BottomSheetModalProvider>
          <RootNavigation />
        </BottomSheetModalProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}
