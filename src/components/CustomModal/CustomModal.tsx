import React from 'react'
import {
  Modal as RNModal,
  TouchableOpacity,
  View,
  StyleSheet,
  ViewStyle,
} from 'react-native'

import { useStyle } from '@/hooks'

export type CustomModalProps = {
  position?: 'center' | 'top' | 'bottom' | 'fill'
  overlay?: boolean
  onClose?: () => void
}

export const CustomModal = (
  props: React.PropsWithChildren<CustomModalProps>
) => {
  const { position = 'center', overlay = true, onClose } = props

  const [isVisible, setIsVisible] = React.useState(true)

  const styles = useStyle(createStyle)

  const handleClose = () => {
    setIsVisible(false)
    onClose?.()
  }

  let contentContainerStyle: ViewStyle = {}

  if (position === 'top') {
    contentContainerStyle = {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
    }
  } else if (position === 'bottom') {
    contentContainerStyle = {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    }
  }

  return (
    <RNModal
      animationType="none"
      transparent={true}
      statusBarTranslucent={true}
      visible={isVisible}
      onRequestClose={handleClose}
    >
      {overlay ? (
        <TouchableOpacity
          activeOpacity={1}
          style={[StyleSheet.absoluteFill, styles.overlay]}
          onPress={handleClose}
        />
      ) : null}
      <View style={[styles.contentContainer, contentContainerStyle]}>
        <View style={[styles.contentWrapper]}>{props.children}</View>
      </View>
    </RNModal>
  )
}

const createStyle = (theme: MyTheme) => {
  const styles = StyleSheet.create({
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentWrapper: {
      backgroundColor: '#fff',
    },
  })
  return styles
}
