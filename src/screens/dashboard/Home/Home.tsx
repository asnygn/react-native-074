import { Container, Text, Switch, Icon } from '@/components'
import { useTimer } from '@/hooks'

export default function Home(props: any) {
  const { counter } = useTimer(60)

  return (
    <Container>
      <Text>{counter}</Text>
      <Switch />
      <Icon name="Person" />
    </Container>
  )
}
