import { RemoteAuthentication } from '@/data'
import { AxiosHttpClient } from '@/infra'
import { Login } from '@/presentation'
import { ValidationBuilder, ValidationComposite } from '@/validations'
import React from 'react'

export const makeLogin: React.FC = () => {
  //

  const url = 'http://fordevs.herokuapp.com/api/login'

  const axiosHttpClient = new AxiosHttpClient()

  const remoteAuthentication = new RemoteAuthentication(url, axiosHttpClient)

  const validationComposite = ValidationComposite.build([
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('password').required().min(5).build(),
  ])

  return (
    <Login
      authentication={remoteAuthentication}
      validation={validationComposite}
    />
  )
}
