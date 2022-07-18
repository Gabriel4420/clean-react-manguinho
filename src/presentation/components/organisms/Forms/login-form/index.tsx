import { FormStatus, Input, Button, Heading } from '@/presentation/components'
import { Validation } from '@/presentation/protocols'
import { FormContext } from '@/presentation/contexts'
import Styles from './styles.scss'
import React, { useState, useEffect } from 'react'

type Props = {
  validation?: Validation
}

const LoginForm: React.FC<Props> = ({ validation }: Props) => {
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
    setState({
      ...state,
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password),
    })
  }, [state.email, state.password])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    setState({ ...state, isLoading: true })
  }

  return (
    <FormContext.Provider value={{ state, setState }}>
      <form className={Styles.form} onSubmit={handleSubmit}>
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
