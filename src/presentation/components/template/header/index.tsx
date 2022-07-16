import { Logo, Heading } from '@/presentation/components'
import Styles from './styles.scss'
import React, { memo } from 'react'

const LoginHeader: React.FC = () => {
  return (
    <header className={Styles.header}>
      <Logo />
      <Heading title="4Dev - Enquetes para programadores" />
    </header>
  )
}

export default memo(LoginHeader)
