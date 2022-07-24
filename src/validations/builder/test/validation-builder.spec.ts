import {
  EmailValidation,
  MinLengthValidation,
  RequiredFieldValidation,
  ValidationBuilder as sut,
} from '@/validations'
import faker from 'faker'

const field = faker.database.column()

const length = faker.datatype.number()

describe('ValidationBuilder', () => {
  test('Should return RequiredField validation ', () => {
    const validations = sut.field(field).required().build()

    expect(validations).toEqual([new RequiredFieldValidation(field)])
  })

  test('Should return EmailValidation ', () => {
    const validations = sut.field(field).email().build()

    expect(validations).toEqual([new EmailValidation(field)])
  })

  test('Should return MinLengthValidation ', () => {
    const validations = sut.field(field).min(length).build()

    expect(validations).toEqual([new MinLengthValidation(field, length)])
  })

  test('Should return a list of validations ', () => {
    const validations = sut.field(field).required().email().min(length).build()

    expect(validations).toEqual([
      new RequiredFieldValidation(field),
      new EmailValidation(field),
      new MinLengthValidation(field, length),
    ])
  })
})
