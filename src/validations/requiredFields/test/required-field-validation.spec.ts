import { RequiredFieldError } from '@/validations/errors'
import { RequiredFieldValidation } from '@/validations/requiredFields/prod'

describe('RequiredFieldValidation', () => {
  test('Should return error if field is empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })
})
