import React from 'react'
import {
  View,
  StyleSheet,
  Animated,
  ColorValue,
  ImageProps as RNImageProps,
} from 'react-native'

import { useStyle } from '@/hooks'

export type ImageProps = RNImageProps & {
  placeholderColor: ColorValue
  placeholderSource?: RNImageProps['source']
}

export const Image = (props: ImageProps) => {
  const { style, placeholderColor, placeholderSource, ...otherProps } = props

  const [isLoading, setIsLoading] = React.useState(true)

  const imageOpacity = React.useRef(
    new Animated.Value(placeholderSource ? 1.0 : 0.0)
  ).current
  const placeholderOpacity = React.useRef(new Animated.Value(1.0)).current
  const placeholderScale = React.useRef(new Animated.Value(1.0)).current

  const styles = useStyle(createStyle)

  const handleImageLoad = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(placeholderScale, {
          toValue: 0.7,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(placeholderOpacity, {
          toValue: 0.66,
          duration: 100,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.parallel([
          Animated.timing(placeholderOpacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.timing(placeholderScale, {
            toValue: 1.2,
            duration: 200,
            useNativeDriver: true,
          }),
        ]),
        Animated.timing(imageOpacity, {
          toValue: 1.0,
          delay: 200,
          duration: 300,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      setIsLoading(false)
    })
  }

  if (!props?.source || !props.source?.uri) {
    return null
  }

  return (
    <View style={[styles.container]}>
      <Animated.Image
        style={[
          style,
          {
            opacity: imageOpacity,
            position: 'absolute',
            resizeMode: 'contain',
          },
        ]}
        resizeMode="contain"
        onLoad={handleImageLoad}
        {...otherProps}
      />
      {placeholderSource && isLoading && (
        <Animated.Image
          source={placeholderSource}
          style={[
            style,
            {
              position: 'absolute',
              opacity: placeholderOpacity,
            },
          ]}
        />
      )}
      {!placeholderSource && isLoading ? (
        <Animated.View
          style={[
            style,
            {
              position: 'absolute',
              backgroundColor: placeholderColor,
              opacity: placeholderOpacity,
              transform: [{ scale: placeholderScale }],
            },
          ]}
        />
      ) : null}
    </View>
  )
}

const createStyle = (theme: MyTheme) => {
  const styles = StyleSheet.create({
    container: {
      position: 'relative',
    },
    image: {},
  })
  return styles
}
