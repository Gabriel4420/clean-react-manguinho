import { InvalidFieldError } from '@/validations/errors'
import { MakeSUT } from '@/validations/helpers'
import { MinLengthValidation } from '@/validations/validators'
import faker from 'faker'

const msut = new MakeSUT()

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    //

    const sut = msut.makeSutMinLengthValidation()

    const error = sut.validate(faker.random.alphaNumeric(4))

    expect(error).toEqual(new InvalidFieldError())

    //
  })

  test('Should return falsy if value is valid', () => {
    //

    const sut = msut.makeSutMinLengthValidation()

    const error = sut.validate(faker.random.alphaNumeric(5))

    expect(error).toBeFalsy()

    //
  })
})
