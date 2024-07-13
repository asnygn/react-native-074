import React from 'react'
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from 'react-native'

import { useStyle, useTheme } from '@/hooks'
import { light } from '@/themes/light'

type TextProps = RNTextProps & {
  fontFamily?: keyof typeof light.fonts
  fontWeight?: keyof typeof light.fonts.Poppins
  fontSize?: number
  color?: string
  textAlign?: 'left' | 'right' | 'center' | 'justify'
}

export const Text = (props: React.PropsWithChildren<TextProps>) => {
  const { style, children, fontWeight = 400, ...otherProps } = props
  const { theme } = useTheme()
  const styles = useStyle(createStyle)
  const fontFamily = theme.fonts.Poppins[fontWeight]
  return (
    <RNText
      style={[styles.text, { fontFamily }, style]}
      allowFontScaling={false}
      {...otherProps}
    >
      {children}
    </RNText>
  )
}

const createStyle = (theme: MyTheme) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: theme.fonts.Poppins[400],
      fontSize: theme.text.fontSize,
      color: theme.text.color,
    },
  })
  return styles
}
