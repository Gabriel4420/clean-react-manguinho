import { FormStatus, Input, Button, Heading } from '@/presentation/components'
import Styles from './styles.scss'
import { FormContext } from '@/presentation/contexts'
import React, { useState } from 'react'

type StateProps = {
  isLoading: boolean
  errorMessage: string
}

const LoginForm: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: '',
  })
  return (
    <FormContext.Provider value={state}>
      <form className={Styles.form} action="">
        <Heading type="h2" title="Login" />

        <Input type="email" name="email" placeholder="Digite seu email" />

        <Input type="password" name="password" placeholder="Digite sua senha" />

        <Button className={Styles.submit} type="submit" text="Entrar" />
        <span className={Styles.link}>Criar conta</span>
        <FormStatus />
      </form>
    </FormContext.Provider>
  )
}

export default LoginForm
