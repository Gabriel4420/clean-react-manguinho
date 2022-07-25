import { InvalidCredentialsError } from '@/domain'
import {
  makeSut,
  populatePasswordField,
  simulateValidSubmit,
  populateEmailField,
  testElementExists,
  testElementText,
  testErrorWrapChildCount,
  testStatusForField,
  testButtonIsDisabled,
  InitialStateStart,
} from '@/presentation'

import { fireEvent, cleanup } from '@testing-library/react'

import faker from 'faker'

import { createMemoryHistory } from 'history'

const history = createMemoryHistory({ initialEntries: ['/login'] })

describe('LoginForm', () => {
  afterEach(cleanup)

  beforeEach(() => localStorage.clear())

  test('Should start with initial state ', () => {
    //

    const validationError = faker.random.words()

    const { sut } = makeSut({ validationError })

    InitialStateStart(
      sut,
      'submit',
      'email',
      'password',
      0,
      validationError,
      true,
    )

    //
  })

  test('Should show email error if validation fails ', () => {
    //

    const validationError = faker.random.words()

    const { sut } = makeSut({ validationError })

    populateEmailField(sut)

    //
  })

  test('Should show password error if validation fails ', () => {
    //

    const validationError = faker.random.words()

    const { sut } = makeSut({ validationError })

    populatePasswordField(sut)

    testStatusForField(sut, 'password', validationError)

    //
  })

  test('Should show valid password if validation succeeds ', () => {
    //

    const { sut } = makeSut()

    populatePasswordField(sut)

    testStatusForField(sut, 'password')

    //
  })

  test('Should show valid email if validation succeeds ', () => {
    const { sut } = makeSut()

    populateEmailField(sut)

    testStatusForField(sut, 'email')
  })

  test('Should enable submit button if form is valid ', () => {
    //

    const { sut } = makeSut()

    populateEmailField(sut)

    populatePasswordField(sut)

    testButtonIsDisabled(sut, 'submit', false)

    //
  })

  test('Should show spinner on submit', async () => {
    //

    const { sut } = makeSut()

    await simulateValidSubmit(sut)

    testElementExists(sut, 'spinner')

    //
  })

  test('Should call Authentication with correct values', async () => {
    //

    const { sut, authenticationSpy } = makeSut()

    const email = faker.internet.email()

    const password = faker.internet.password()

    await simulateValidSubmit(sut, email, password)

    expect(authenticationSpy.params).toEqual({ email, password })

    //
  })

  test('Should call Authentication only once', async () => {
    //

    const { sut, authenticationSpy } = makeSut()

    await simulateValidSubmit(sut)

    await simulateValidSubmit(sut)

    expect(authenticationSpy.callsCount).toEqual(1)

    //
  })

  test('Should not call Authentication if form is invalid', async () => {
    //
    const validationError = faker.random.words()

    const { sut, authenticationSpy } = makeSut({ validationError })

    await simulateValidSubmit(sut)

    expect(authenticationSpy.callsCount).toBe(0)

    //
  })

  test('Should present error if Authentication fails', async () => {
    //

    const { sut, authenticationSpy } = makeSut()

    const error = new InvalidCredentialsError()

    jest
      .spyOn(authenticationSpy, 'auth')
      .mockReturnValueOnce(Promise.reject(error))

    await simulateValidSubmit(sut)

    testElementText(sut, 'main-error', error.message)

    testErrorWrapChildCount(sut, 1)

    //
  })

  test('Should add accessToken to localstorage on success', async () => {
    //

    const { sut, authenticationSpy } = makeSut()

    await simulateValidSubmit(sut)

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'accessToken',
      authenticationSpy.account.accessToken,
    )

    expect(history.length).toBe(1)

    expect(history.location.pathname).toBe('/')

    //
  })

  test('Should go to signUp page', () => {
    //

    const { sut } = makeSut()

    const register = sut.getByTestId('signup')

    fireEvent.click(register)

    expect(history.length).toBe(2)

    expect(history.location.pathname).toBe('/signup')

    //
  })
})
