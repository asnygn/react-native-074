import { memo, useEffect, useRef } from 'react'
import { Animated, ColorValue, View, ViewStyle } from 'react-native'

export type VerticalStickProps = {
  style?: ViewStyle
  focusColor?: ColorValue
  focusStickBlinkingDuration?: number
}

export const VerticalStick = memo((props: VerticalStickProps) => {
  const { style, focusColor, focusStickBlinkingDuration = 350 } = props

  const opacityAnim = useRef(new Animated.Value(1)).current

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacityAnim, {
          toValue: 0,
          useNativeDriver: true,
          duration: focusStickBlinkingDuration,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          useNativeDriver: true,
          duration: focusStickBlinkingDuration,
        }),
      ]),
      {
        iterations: -1,
      }
    ).start()
  }, [])

  return (
    <Animated.View style={{ opacity: opacityAnim }}>
      <View
        style={[
          {
            width: 2,
            height: 30,
            backgroundColor: 'green',
          },
          focusColor ? { backgroundColor: focusColor } : {},
          style,
        ]}
        testID="otp-input-stick"
      />
    </Animated.View>
  )
})
