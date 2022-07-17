import { FormStatus, Input, Button, Heading } from '@/presentation/components'
import Styles from './styles.scss'
import { FormContext } from '@/presentation/contexts'
import React, { useState } from 'react'

const LoginForm: React.FC = () => {
  const [state] = useState({
    isLoading: false,
    errorMessage: '',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório',
  })
  return (
    <FormContext.Provider value={state}>
      <form className={Styles.form} action="">
        <Heading type="h2" title="Login" />

        <Input type="email" name="email" placeholder="Digite seu email" />

        <Input type="password" name="password" placeholder="Digite sua senha" />

        <Button
          data-testid="submit"
          className={Styles.submit}
          type="submit"
          text="Entrar"
        />
        <span className={Styles.link}>Criar conta</span>
        <FormStatus />
      </form>
    </FormContext.Provider>
  )
}

export default LoginForm
