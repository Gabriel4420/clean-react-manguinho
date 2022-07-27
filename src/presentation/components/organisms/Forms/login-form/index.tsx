import {
  FormStatus,
  Input,
  Button,
  Heading,
  Validation,
  FormContext,
} from '@/presentation'

import { Authentication } from '@/domain'
import Styles from './styles.scss'
import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

export type Props = {
  validation?: Validation
  authentication?: Authentication
}

const LoginForm: React.FC<Props> = ({ validation, authentication }: Props) => {
  //

  const history = useHistory()

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

      history.replace('/')

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
        <Heading  type="h2" title="Login" />

        <Input type="email" name="email" placeholder="Digite seu email" />

        <Input type="password" name="password" placeholder="Digite sua senha" />

        <Button
          data-testid="submit"
          className={Styles.submit}
          type="submit"
          text="Entrar"
          disabled={!!state.emailError || !!state.passwordError}
        />

        <Link to="/signup" data-testid="signup" className={Styles.link}>
          Criar conta
        </Link>

        <FormStatus />
      </form>
    </FormContext.Provider>
  )
}

export default LoginForm
