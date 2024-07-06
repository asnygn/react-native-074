import React from 'react'
import { StyleSheet, useWindowDimensions } from 'react-native'
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet'

import { useStyle, useTheme } from '@/hooks'

export const GorhomBottomSheet = React.memo((props: any) => {
  const { dynamicSize = false, showModal = false, children, onChange } = props
  const { theme } = useTheme()

  const bottomSheetModalRef = React.useRef<BottomSheetModal>()
  const dimensions = useWindowDimensions()
  const styles = useStyle(createStyle)

  React.useEffect(() => {
    if (showModal) {
      bottomSheetModalRef.current?.present()
    }
  }, [showModal])

  let settings: any = { snapPoints: ['90%'] }

  if (dynamicSize) {
    settings = {
      enableDynamicSizing: true,
      maxDynamicContentSize: dimensions.height - 180,
    }
  }

  if (showModal) {
    return (
      <BottomSheetModal
        ref={bottomSheetModalRef}
        style={styles.container}
        backdropComponent={(backdropProps) => (
          <BottomSheetBackdrop
            {...backdropProps}
            disappearsOnIndex={-1}
            appearsOnIndex={0}
          />
        )}
        onChange={onChange}
        {...settings}
      >
        <BottomSheetScrollView>{children}</BottomSheetScrollView>
      </BottomSheetModal>
    )
  }
})

const createStyle = (theme: MyTheme) => {
  const styles = StyleSheet.create({
    container: {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    },
  })
  return styles
}
