import { NavigationContainer } from '@react-navigation/native'

import AppStack from './AppStack'

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  )
}
