import React from 'react'
import { Pressable, View, Animated, StyleSheet } from 'react-native'

import { useStyle } from '@/hooks/useStyle'

export const Switch = ({
  value,
  activeTrackColor = '#000',
  inActiveTrackColor = '#999',
  thumbColor = '#fff',
  onChange,
}: any) => {
  const [animatedValue] = React.useState(new Animated.Value(value ? 1 : 0))

  const styles = useStyle(createStyle)

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: value ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start()
  }, [value])

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [4, 28],
  })

  const containerStyle = {
    backgroundColor: value ? activeTrackColor : inActiveTrackColor,
  }

  const thumbStyle = {
    backgroundColor: thumbColor,
  }

  const toggleSwitch = () => onChange?.(!value)

  return (
    <Pressable
      onPress={toggleSwitch}
      style={[styles.container, containerStyle]}
    >
      <View style={styles.innerContainer}>
        <Animated.View style={{ transform: [{ translateX }] }}>
          <View style={[styles.thumb, thumbStyle]} />
        </Animated.View>
      </View>
    </Pressable>
  )
}

const createStyle = (theme: MyTheme) => {
  const styles = StyleSheet.create({
    container: {
      width: 56,
      height: 32,
      borderRadius: 16,
    },
    innerContainer: {
      position: 'relative',
      flex: 1,
      justifyContent: 'center',
    },
    thumb: {
      width: 24,
      height: 24,
      borderRadius: 24 / 2,
    },
  })
  return styles
}
