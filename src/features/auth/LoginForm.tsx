import React from 'react'
import { Controller, FormProvider } from 'react-hook-form'

import { TextField } from '@/components/TextField'
import { Button } from '@/components/Button'

import { useLoginForm } from './LoginForm.hook'

export const LoginForm = (props: any) => {
  const { loginForm, submitForm } = useLoginForm()

  return (
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
  )
}
