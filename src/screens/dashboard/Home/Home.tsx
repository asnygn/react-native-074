import { Container, Text, Switch, Icon } from '@/components'
import { useTimer } from '@/hooks'

export default function Home(props: any) {
  const { counter } = useTimer(60)

  return (
    <Container>
      <Text>{counter}</Text>
      <Text>Hello World</Text>
      <Text fontWeight="900">Hello World</Text>
      <Switch />
      <Icon name="Person" />
    </Container>
  )
}
