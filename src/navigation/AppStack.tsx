import { createStackNavigator } from '@react-navigation/stack'

import Home from '@/screens/dashboard/Home'
import Login from '@/screens/auth/Login'

const Stack = createStackNavigator()

export default function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home">{(props) => <Home {...props} />}</Stack.Screen>
      <Stack.Screen name="Login">
        {(props) => <Login {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}
