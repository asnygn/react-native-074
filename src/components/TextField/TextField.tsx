import {
  View,
  ViewStyle,
  TextInput,
  TextInputProps,
  StyleSheet,
  TextStyle,
} from 'react-native'

import { useStyle } from '@/hooks/useStyle'
import { Text } from '../Text'

export type TextFieldProps = TextInputProps & {
  label?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  errorMessage?: string
  labelStyle?: TextStyle
  textInputContainer?: ViewStyle
  textInputStyle?: ViewStyle
}

export const TextField = (props: TextFieldProps) => {
  const {
    label = '',
    leftIcon,
    rightIcon,
    errorMessage,
    labelStyle = {},
    textInputContainer = {},
    textInputStyle = {},
    ...otherProps
  } = props

  const styles = useStyle(createStyle)

  const dynamicTextInputStyle = {
    paddingLeft: leftIcon ? 40 : 10,
    paddingRight: rightIcon ? 40 : 10,
    ...textInputStyle,
  }

  return (
    <View>
      {label && <Text style={[labelStyle]}>{label}</Text>}
      <View style={[textInputContainer]}>
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
        <TextInput
          style={[styles.textInput, dynamicTextInputStyle]}
          {...otherProps}
        />
        {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
      </View>
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  )
}

const createStyle = (theme: MyTheme) => {
  const styles = StyleSheet.create({
    textInput: {
      padding: 10,
      color: theme.text.color,
      borderColor: '#000',
      borderWidth: 1,
    },
    leftIcon: {
      position: 'absolute',
      left: 10,
      top: 0,
      bottom: 0,
      justifyContent: 'center',
    },
    rightIcon: {
      position: 'absolute',
      right: 10,
      top: 0,
      bottom: 0,
      justifyContent: 'center',
    },
    errorText: {
      marginTop: 4,
      color: 'red',
    },
  })
  return styles
}
