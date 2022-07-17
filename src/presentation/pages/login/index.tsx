import { Header, Footer, LoginForm } from '@/presentation/components'
import { Validation } from '@/presentation/protocols'
import React from 'react'
import Styles from './styles.scss'

type Props = {
  validation: Validation
}

const Login: React.FC<Props> = ({ validation }: Props) => {
  return (
    <div className={Styles.login}>
      <Header />
      <LoginForm validation={validation} />
      <Footer />
    </div>
  )
}

export default Login
