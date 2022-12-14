import { InvalidFieldError } from '@/validations/errors'
import { EmailValidation } from '@/validations/validators/email'
import faker from 'faker'

describe('EmailValidation', () => {
  test('Should return error if email is invalid', () => {
    const sut = new EmailValidation('email')

    const error = sut.validate(faker.random.word())

    expect(error).toEqual(new InvalidFieldError())
  })

  test('Should return falsy if email is valid', () => {
    const sut = new EmailValidation('email')

    const error = sut.validate(faker.internet.email())

    expect(error).toBeFalsy()
  })

  test('Should return falsy if email is empty', () => {
    const sut = new EmailValidation('email')

    const error = sut.validate('')

    expect(error).toBeFalsy()
  })
})
