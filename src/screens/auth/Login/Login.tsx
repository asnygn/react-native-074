import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import {
  Controller,
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { fieldErrorMessage } from '@/constants'
import { Container } from '@/components/atomic/Container'
import { Text } from '@/components/atomic/Text'
import { TextField } from '@/components/atomic/TextField'
import { Button } from '@/components/atomic/Button'

const loginSchema = z.object({
  email: z
    .string({
      invalid_type_error: 'Email must be a string',
      required_error: fieldErrorMessage.REQUIRED_FIELD,
    })
    .email('Email is invalid'),
  password: z
    .string({
      invalid_type_error: 'Password must be a string',
      required_error: fieldErrorMessage.REQUIRED_FIELD,
    })
    .min(3, 'Minimum 3 characters')
    .max(20, 'Maximum 20 characters'),
})

type LoginSchemaType = z.infer<typeof loginSchema>

const Login = (props: any) => {
  const { navigation } = props

  const loginForm = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {},
    mode: 'onBlur',
  })

  const submitForm: SubmitHandler<LoginSchemaType> = (data) => {
    console.log(data)
  }

  return (
    <Container>
      <FormProvider {...loginForm}>
        <Controller
          name="email"
          control={loginForm.control}
          render={({ field, fieldState }) => (
            <TextField
              label="Email"
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              value={field.value}
              errorMessage={fieldState?.error?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={loginForm.control}
          render={({ field, fieldState }) => (
            <TextField
              label="Password"
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              value={field.value}
              errorMessage={fieldState?.error?.message}
            />
          )}
        />
        <Button
          appearance="gradient"
          text="Submit"
          onPress={loginForm.handleSubmit(submitForm)}
        />
      </FormProvider>
    </Container>
  )
}

export default Login
