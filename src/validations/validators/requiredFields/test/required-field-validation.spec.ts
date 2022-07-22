import { RequiredFieldError } from '@/validations/errors'
import { MakeSUT } from '@/validations/helpers/makeSut'
import faker from 'faker'

const msut = new MakeSUT()

describe('RequiredFieldValidation', () => {
  test('Should return error if field is empty', () => {
    const sut = msut.makeSutRequiredFields()
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })

  test('Should return falsy if field is not empty', () => {
    const sut = msut.makeSutRequiredFields()
    const error = sut.validate(faker.random.word())
    expect(error).toBeFalsy()
  })
})
