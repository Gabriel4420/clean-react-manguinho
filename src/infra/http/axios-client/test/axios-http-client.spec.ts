import { makeSut } from '@/infra'

import { mockPostRequest } from '@/data'

jest.mock('axios')

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    //

    const request = mockPostRequest()

    const { sut, mockedAxios } = makeSut()

    await sut.post(request)

    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('Should return the correct statusCode and body', () => {
    //

    const { sut, mockedAxios } = makeSut()

    const promise = sut.post(mockPostRequest())

    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
  })
})
