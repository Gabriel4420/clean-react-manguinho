import { ValidationComposite } from '@/validations/composite'
import { FieldValidationSpy } from '@/validations/validators'

describe('ValidationComposite', () => {
  test('Should return erro if any validation fails ', () => {
    const fieldValidationSpy = new FieldValidationSpy('any_field')
    const fieldValidationSpy2 = new FieldValidationSpy('any_field')
    fieldValidationSpy2.error = new Error('any_message')
    const sut = new ValidationComposite([
      fieldValidationSpy,
      fieldValidationSpy2,
    ])
    const error = sut.validate('any_field', 'any_value')
    expect(error).toBe('any_message')
  })
})
