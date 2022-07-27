import React from 'react'
import { Login } from '@/presentation'
import { makeRemoteAuthentication } from '@/main/goto'
import { makeLoginValidation } from './validation'

export const makeLogin: React.FC = () => {
  //
  return (
    <Login
      authentication={makeRemoteAuthentication()}
      validation={makeLoginValidation()}
    />
  )
}
