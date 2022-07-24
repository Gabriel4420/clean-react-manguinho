import { MakeSUT } from '@/validations'
import faker from 'faker'

const msut = new MakeSUT()

const fieldName = faker.database.column()

describe('ValidationComposite', () => {
  //

  test('Should return erro if any validation fails ', () => {
    //

    const { sut, fieldValidationsSpy } = msut.makeSutComposite(fieldName)

    const errorMessage = faker.random.words()

    fieldValidationsSpy[0].error = new Error(errorMessage)

    fieldValidationsSpy[1].error = new Error(faker.random.words())

    const error = sut.validate('any_field', faker.random.words())

    expect(error).toBe(error)
  })

  test('Should return falsy if any validation pass ', () => {
    //

    const { sut } = msut.makeSutComposite(fieldName)

    const error = sut.validate('any_field', faker.random.words())

    expect(error).toBeFalsy
  })
})
