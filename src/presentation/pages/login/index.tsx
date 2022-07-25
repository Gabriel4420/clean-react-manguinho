import { Header, Footer, LoginForm, Validation } from '@/presentation'
import { Authentication } from '@/domain'

import React from 'react'
import Styles from './styles.scss'

export type Props = {
  validation?: Validation
  authentication?: Authentication
}

const Login: React.FC<Props> = ({ validation, authentication }: Props) => {
  return (
    <div className={Styles.login}>
      <Header />
      <LoginForm authentication={authentication} validation={validation} />
      <Footer />
    </div>
  )
}

export default Login
