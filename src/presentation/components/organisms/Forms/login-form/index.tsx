import { FormStatus, Input, Button, Heading } from '@/presentation/components'
import { Validation } from '@/presentation/protocols'
import { FormContext } from '@/presentation/contexts'
import { Authentication } from '@/domain/usecases'
import Styles from './styles.scss'
import React, { useState, useEffect } from 'react'

type Props = {
  validation?: Validation
  authentication?: Authentication
}

const LoginForm: React.FC<Props> = ({ validation, authentication }: Props) => {
  //

  const [state, setState] = useState({
    isLoading: false,
    errorMessage: '',
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: '',
  })

  useEffect(() => {
    //

    setState({
      ...state,
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password),
    })

    //
  }, [state.email, state.password])

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    try {
      //

      event.preventDefault()

      if (state.isLoading || state.emailError || state.passwordError) {
        return
      }

      setState({ ...state, isLoading: true })

      const account = await authentication.auth({
        email: state.email,
        password: state.password,
      })

      localStorage.setItem('accessToken', account.accessToken)

      //
    } catch (error) {
      //

      setState({ ...state, isLoading: false, mainError: error.message })

      //
    }
  }

  return (
    <FormContext.Provider value={{ state, setState }}>
      <form data-testid="form" className={Styles.form} onSubmit={handleSubmit}>
        <Heading type="h2" title="Login" />

        <Input type="email" name="email" placeholder="Digite seu email" />

        <Input type="password" name="password" placeholder="Digite sua senha" />

        <Button
          data-testid="submit"
          className={Styles.submit}
          type="submit"
          text="Entrar"
          disabled={!!state.emailError || !!state.passwordError}
        />

        <span className={Styles.link}>Criar conta</span>

        <FormStatus />
      </form>
    </FormContext.Provider>
  )
}

export default LoginForm
