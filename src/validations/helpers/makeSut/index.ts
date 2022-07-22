import { RequiredFieldValidation } from '@/validations/validators'
import { EmailValidation } from '@/validations/validators'
import faker from 'faker'

export class MakeSUT {
  makeSutRequiredFields = (): RequiredFieldValidation =>
    new RequiredFieldValidation(faker.database.column())

  makeSutEmailValidation = (): EmailValidation =>
    new EmailValidation(faker.database.column())
}
