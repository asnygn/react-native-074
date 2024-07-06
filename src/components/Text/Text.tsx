import React from 'react'
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from 'react-native'

import { useStyle } from '@/hooks/useStyle'
import { light } from '@/themes/light'

type TextProps = RNTextProps & {
  // fontFamily?: keyof typeof light.fonts
  // fontWeight?: keyof typeof light.fonts.Inter
  fontSize?: number
  color?: string
  textAlign?: 'left' | 'right' | 'center' | 'justify'
}

export const Text = (props: React.PropsWithChildren<TextProps>) => {
  const { style, children, ...otherProps } = props
  const styles = useStyle(createStyle)
  return (
    <RNText
      style={[styles.text, style]}
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
      // fontFamily: theme.fonts.Inter[500],
      // fontSize: theme.text.fontsize,
      color: theme.text.color,
    },
  })
  return styles
}
