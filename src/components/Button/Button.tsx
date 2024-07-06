import React from 'react'
import { View, ActivityIndicator, Pressable, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { useStyle } from '@/hooks/useStyle'
import { useTheme } from '@/hooks/useTheme'

import { Text } from '../Text'

type CommonProps = {
  text: string
  buttonStyle?: {}
  buttonDisabledStyle?: {}
  textStyle?: {}
  textDisabledStyle?: {}
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  isLoading?: boolean
  isDisabled?: boolean
  onPress?: () => void
}

type GradientProps = {
  appearance: 'gradient'
  gradientProps?: {}
} & CommonProps

type OutlineProps = {
  appearance: 'outline'
} & CommonProps

type CustomProps = {
  appearance: 'custom'
  buttonStyle: {}
  buttonDisabledStyle?: {}
  textStyle: {}
  textDisabledStyle?: {}
} & CommonProps

export type ButtonProps = GradientProps | OutlineProps | CustomProps

export const Button = React.memo(
  (props: React.PropsWithChildren<ButtonProps>) => {
    const {
      appearance,
      text,
      buttonStyle,
      buttonDisabledStyle,
      textStyle,
      textDisabledStyle,
      leftIcon,
      rightIcon,
      isLoading,
      isDisabled,
      onPress,
    } = props

    const styles = useStyle(createStyle)
    const { theme } = useTheme()

    const [isPressed, setIsPressed] = React.useState(false)

    const onPressEffect = () => setIsPressed((prev) => !prev)

    const LeftIcon = () => {
      return leftIcon ? (
        <View style={{ marginRight: 8 }}>{leftIcon}</View>
      ) : null
    }

    const RightIcon = () => {
      return rightIcon ? (
        <View style={{ marginRight: 8 }}>{rightIcon}</View>
      ) : null
    }

    if (appearance === 'gradient') {
      const { gradientProps } = props

      const {
        color,
        backgroundColor,
        backgroundColorDisabled,
        backgroundColorPressed,
      } = theme.button.primaryGradient

      let gradientColor = backgroundColor

      if (isDisabled) {
        gradientColor = backgroundColorDisabled
      } else if (isPressed) {
        gradientColor = backgroundColorPressed
      }

      return (
        <Pressable
          style={styles.container}
          disabled={isLoading || isDisabled}
          onPress={onPress}
          onPressIn={onPressEffect}
          onPressOut={onPressEffect}
        >
          <LinearGradient
            style={styles.primaryGradient}
            colors={gradientColor}
            {...gradientProps}
          >
            {isLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <View style={styles.buttonTextWrapper}>
                <LeftIcon />
                <Text
                  style={[
                    styles.buttonText,
                    textStyle,
                    isDisabled && textDisabledStyle,
                  ]}
                >
                  {text}
                </Text>
                <RightIcon />
              </View>
            )}
          </LinearGradient>
        </Pressable>
      )
    }
  }
)

const createStyle = (theme: MyTheme) => {
  const styles = StyleSheet.create({
    container: {
      borderRadius: theme.button.borderRadius,
    },
    buttonTextWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: theme.button.fontSize,
      color: theme.button.color,
    },
    primaryGradient: {
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: theme.button.height,
      borderRadius: theme.button.borderRadius,
    },
  })
  return styles
}
