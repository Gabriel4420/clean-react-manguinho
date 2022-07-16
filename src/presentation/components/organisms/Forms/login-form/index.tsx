import { FormStatus, Input, Button } from '@/presentation/components'
import Styles from './styles.scss'

import React from 'react'

const LoginForm: React.FC = () => {
  return (
    <form className={Styles.form} action="">
      <h2>Login</h2>

      <Input type="email" name="email" placeholder="Digite seu email" />

      <Input type="password" name="password" placeholder="Digite sua senha" />

      <Button className={Styles.submit} type="submit" text="Entrar" />
      <span className={Styles.link}>Criar conta</span>
      <FormStatus />
    </form>
  )
}

export default LoginForm
