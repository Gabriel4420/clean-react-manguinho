import { RequiredFieldValidation } from '@/validations/validators/requiredFields'
import faker from 'faker'

export const makeSut = (): RequiredFieldValidation =>
  new RequiredFieldValidation(faker.database.column())
