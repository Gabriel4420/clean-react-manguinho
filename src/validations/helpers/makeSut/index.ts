import { RequiredFieldValidation } from '@/validations/requiredFields'
import faker from 'faker'

export const makeSut = (): RequiredFieldValidation =>
  new RequiredFieldValidation(faker.database.column())
