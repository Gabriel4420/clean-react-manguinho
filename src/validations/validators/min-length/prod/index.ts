import { InvalidFieldError } from '@/validations/errors'
import { FieldValidation } from '@/validations/protocols'

export default class MinLengthValidation implements FieldValidation {
  //
  constructor(readonly field: string, private readonly minLength) {}

  validate(value: string): Error {
    return value.length >= this.minLength ? null : new InvalidFieldError()
  }
}
