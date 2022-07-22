import { MakeSUT } from '@/validations'

const msut = new MakeSUT()

describe('ValidationComposite', () => {
  test('Should return erro if any validation fails ', () => {
    const { sut, fieldValidationsSpy } = msut.makeSutComposite()
    fieldValidationsSpy[0].error = new Error('first_error_message')
    fieldValidationsSpy[1].error = new Error('second_error_message')
    const error = sut.validate('any_field', 'any_value')
    expect(error).toBe('first_error_message')
  })
})
