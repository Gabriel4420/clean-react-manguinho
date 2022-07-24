import {
  mockAccountModel,
  mockAuthentication,
  InvalidCredentialsError,
  UnexpectedError,
} from '@/domain'

import { HttpStatusCode, makeSut } from '@/data'

import faker from 'faker'

describe('RemoteAuthentication', () => {
  //

  test('Should call HttpPostClient with correct URL', async () => {
    //

    const url = faker.internet.url()

    const { sut, httpPostClientSpy } = makeSut(url)

    await sut.auth(mockAuthentication())

    expect(httpPostClientSpy.url).toBe(url)
  })

  test('Should call HttpPostClient with correct body', async () => {
    //

    const { sut, httpPostClientSpy } = makeSut()

    const authenticationParams = mockAuthentication()

    await sut.auth(authenticationParams)

    expect(httpPostClientSpy.body).toEqual(authenticationParams)
  })

  test('Should Throw InvalidCredentialsError if HttpPostClient return 401', async () => {
    //

    const { sut, httpPostClientSpy } = makeSut()

    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized,
    }

    const promise = sut.auth(mockAuthentication())

    await expect(promise).rejects.toThrow(new InvalidCredentialsError())
  })

  test('Should Throw UnexpectedError if HttpPostClient return 400', async () => {
    //
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.badRequest,
    }

    const promise = sut.auth(mockAuthentication())

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should Throw UnexpectedError if HttpPostClient return 500', async () => {
    //

    const { sut, httpPostClientSpy } = makeSut()

    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    }

    const promise = sut.auth(mockAuthentication())

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should Throw UnexpectedError if HttpPostClient return 404', async () => {
    //
    const { sut, httpPostClientSpy } = makeSut()

    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.notFound,
    }

    const promise = sut.auth(mockAuthentication())

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should return an AccountModel if HttpPostClient return 200', async () => {
    //
    const { sut, httpPostClientSpy } = makeSut()

    const httpResult = mockAccountModel()

    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    }

    const account = await sut.auth(mockAuthentication())

    await expect(account).toEqual(httpResult)
  })
})
