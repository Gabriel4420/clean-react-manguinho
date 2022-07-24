import {
  FieldValidationSpy,
  MinLengthValidation,
  RequiredFieldValidation,
  EmailValidation,
  ValidationComposite,
} from '@/validations'

import faker from 'faker'

export type SutTypes = {
  sut: ValidationComposite
  fieldValidationsSpy: FieldValidationSpy[]
}

export class MakeSUT {
  //

  makeSutRequiredFields = (): RequiredFieldValidation =>
    new RequiredFieldValidation(faker.database.column())

  makeSutEmailValidation = (): EmailValidation =>
    new EmailValidation(faker.database.column())

  makeSutMinLengthValidation = (): MinLengthValidation =>
    new MinLengthValidation(faker.database.column(), 5)

  makeSutComposite = (fieldName: string): SutTypes => {
    //

    const fieldValidationsSpy = [
      new FieldValidationSpy(fieldName),
      new FieldValidationSpy(fieldName),
    ]

    const sut = ValidationComposite.build(fieldValidationsSpy)

    return {
      sut,
      fieldValidationsSpy,
    }

    //
  }
}
