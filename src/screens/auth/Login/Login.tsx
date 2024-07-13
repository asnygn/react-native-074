import React from 'react'

import { Container } from '@/components'
import { LoginForm } from '@/features/auth/LoginForm'

export default function Login(props: any) {
  return (
    <Container>
      <LoginForm />
    </Container>
  )
}
