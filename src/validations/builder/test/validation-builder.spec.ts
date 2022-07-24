import { EmailValidation, RequiredFieldValidation, ValidationBuilder as sut } from '@/validations'

describe('ValidationBuilder', () => {
  test('Should return RequiredField validation ', () => {
    const validations = sut.field('any_field').required().build()

    expect(validations).toEqual([new RequiredFieldValidation('any_field')])
  })

  test('Should return EmailValidation ', () => {
    const validations = sut.field('any_field').email().build()

    expect(validations).toEqual([new EmailValidation('any_field')])
  })
})
