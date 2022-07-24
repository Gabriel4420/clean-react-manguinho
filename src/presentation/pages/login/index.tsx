import { Header, Footer, LoginForm } from '@/presentation'

import React from 'react'
import Styles from './styles.scss'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />
      <LoginForm />
      <Footer />
    </div>
  )
}

export default Login
