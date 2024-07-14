import React from 'react'
import { View, ScrollView, StyleSheet, RefreshControl } from 'react-native'
import ErrorBoundary from 'react-native-error-boundary'

import { useStyle } from '@/hooks'
import { handleErrorBoundary } from '@/utils/error-boundary'

export const Container = (props: React.PropsWithChildren<any>) => {
  const { isScroll = false, onRefresh } = props
  const [refreshing, setRefreshing] = React.useState(false)
  const styles = useStyle(createStyle)

  const onRefreshContainer = React.useCallback(() => {
    setRefreshing(true)
    onRefresh?.()
    setRefreshing(false)
  }, [])

  return (
    <ErrorBoundary onError={handleErrorBoundary}>
      {isScroll ? (
        <ScrollView
          contentContainerStyle={styles.container}
          refreshControl={
            onRefresh && (
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefreshContainer}
              />
            )
          }
        >
          {props.children}
        </ScrollView>
      ) : (
        <View style={styles.container}>{props.children}</View>
      )}
    </ErrorBoundary>
  )
}

const createStyle = (theme: MyTheme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: theme.app.screenPadding,
      backgroundColor: theme.app.backgroundColor,
    },
  })
  return styles
}
