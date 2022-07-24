import { LoginForm, ValidationStub, AuthenticationSpy } from '@/presentation'
import { render, RenderResult } from '@testing-library/react'
import { Router } from 'react-router-dom'
import React from 'react'
import { history } from '../../login.spec'

type SutTypes = {
  sut: RenderResult
  authenticationSpy: AuthenticationSpy
}

type SutParams = {
  validationError: string
}

const makeSut = (params?: SutParams): SutTypes => {
  //

  const validationStub = new ValidationStub()

  const authenticationSpy = new AuthenticationSpy()

  validationStub.errorMessage = params?.validationError

  const sut = render(
    //
    <Router history={history}>
      <LoginForm
        validation={validationStub}
        authentication={authenticationSpy}
      />
    </Router>,

    //
  )

  return {
    sut,
    authenticationSpy,
  }

  //
}

export default makeSut
