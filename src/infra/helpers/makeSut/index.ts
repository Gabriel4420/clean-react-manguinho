import { AxiosHttpClient, mockAxios } from '@/infra'

import axios from 'axios'

type SutTypes = {
  sut: AxiosHttpClient

  mockedAxios: jest.Mocked<typeof axios>
}

export const makeSut = (): SutTypes => {
  //

  const sut = new AxiosHttpClient()

  const mockedAxios = mockAxios()

  return {
    sut,
    mockedAxios,
  }
}
