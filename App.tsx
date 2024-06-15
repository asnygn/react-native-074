import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import RootNavigation from '@/navigation/RootNavigation'

export default function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <RootNavigation />
    </GestureHandlerRootView>
  )
}
