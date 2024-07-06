import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { fieldErrorMessage } from '@/constants'

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

export const useLoginForm = () => {
  const loginForm = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {},
    mode: 'onBlur',
  })

  const submitForm = (data: SubmitHandler<LoginSchemaType>) => {
    console.log(data)
  }

  return { loginForm, submitForm }
}
