import React from 'react'

import { Container } from '@/components/Container'
import { LoginForm } from '@/features/auth/LoginForm'

export default function Login(props: any) {
  return (
    <Container>
      <LoginForm />
    </Container>
  )
}
