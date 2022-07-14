import {
  Button,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  VStack
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { type FC } from 'react'

const LogInForm: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const onSubmit = handleSubmit(values => {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    })
  })
  return (
    <form onSubmitCapture={onSubmit}>
      <VStack gap={4}>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="Email address"
            {...register('email', {
              required: 'An email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address'
              }
            })}
          />
          <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.password}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            placeholder="Password"
            type="password"
            {...register('password', {
              required: 'A password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters'
              }
            })}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
      </VStack>
      <Button
        type="submit"
        isLoading={isSubmitting}
        isDisabled={isSubmitting}
        mt={4}
        colorScheme="teal"
        size="lg"
      >
        Log In
      </Button>
    </form>
  )
}

export default LogInForm
