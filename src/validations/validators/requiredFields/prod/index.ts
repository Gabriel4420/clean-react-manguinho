import { FieldValidation } from '@/validations/protocols'
import { RequiredFieldError } from '@/validations/errors'

export default class RequiredFieldValidation implements FieldValidation {
  constructor(readonly field: string) {}
  validate(value: string): Error {
    return value ? null : new RequiredFieldError()
  }
}
