import { FieldValidation } from '@/validations/protocols'

export default class FieldValidationSpy implements FieldValidation {
  error: Error = null
  constructor(readonly field: string) {}
  validate(value: string): Error {
    return this.error
  }
}
