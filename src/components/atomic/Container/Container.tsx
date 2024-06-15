import React from 'react'
import { View, StyleSheet } from 'react-native'
import ErrorBoundary from 'react-native-error-boundary'

import { useStyle } from '@/hooks/useStyle'
import { handleErrorBoundary } from '@/utils/error-boundary'

export const Container = (props: React.PropsWithChildren) => {
  const styles = useStyle(createStyle)
  return (
    <ErrorBoundary onError={handleErrorBoundary}>
      <View style={styles.container}>{props.children}</View>
    </ErrorBoundary>
  )
}

const createStyle = (theme: MyTheme) => {
  const styles = StyleSheet.create({
    container: {
      padding: theme.app.screenPadding,
    },
  })
  return styles
}
