import React from 'react'
import { Container, Text, Switch, Icon, Button } from '@/components'
import { useTimer } from '@/hooks'
import { ThemeContext } from '@/contexts/ThemeProvider'
import { usePersistStore } from '@/stores'

export default function Home(props: any) {
  const { toggleTheme } = React.useContext(ThemeContext)

  return (
    <Container>
      <Text>Hello World</Text>
      <Text fontWeight="900">Hello World</Text>
      <Switch />
      <Icon name="Person" />
      <Button
        appearance="gradient"
        text="toggle"
        onPress={() => {
          toggleTheme()
        }}
      />
    </Container>
  )
}
