import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

import RootNavigation from '@/navigation/RootNavigation'

export default function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <RootNavigation />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}
