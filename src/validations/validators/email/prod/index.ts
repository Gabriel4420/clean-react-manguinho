import { InvalidFieldError } from '@/validations/errors'
import { FieldValidation } from '@/validations/protocols'

export default class EmailValidation implements FieldValidation {
  constructor(readonly field: string) {}
  validate(value: string): Error {
    //

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return !value || emailRegex.test(value) ? null : new InvalidFieldError()
  }
}
