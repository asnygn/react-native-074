import { Container } from '@/components/Container'
import { Text } from '@/components/Text'
import { useTimer } from '@/hooks/useTimer'

export default function Home(props: any) {
  const { counter } = useTimer(60)

  return (
    <Container>
      <Text>{counter}</Text>
    </Container>
  )
}
