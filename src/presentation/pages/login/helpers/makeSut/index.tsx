import {
  Login,
  HistoryContext,
  ValidationStub,
  AuthenticationSpy,
} from '@/presentation'

import { render, RenderResult } from '@testing-library/react'

import { Router } from 'react-router-dom'

import React from 'react'

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
    <Router history={HistoryContext}>
      <Login validation={validationStub} authentication={authenticationSpy} />
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
