import Spinner from '@/presentation/components/atoms/spinner'
import Header from '@/presentation/components/template/login-header'
import Footer from '@/presentation/components/template/Footer'
import Styles from './styles.scss'
import React from 'react'
import Input from '@/presentation/components/mols/input'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />
      <form className={Styles.form} action="">
        <h2>Login</h2>

        <Input type="email" name="email" placeholder="Digite seu email" />

        <Input type="password" name="password" placeholder="Digite sua senha" />

        <button className={Styles.submit} type="submit">
          Entrar
        </button>
        <span className={Styles.link}>Criar conta</span>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />
          <span className={Styles.error}>Erro</span>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default Login
