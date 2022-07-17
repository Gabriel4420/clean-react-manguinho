import { Validation } from '@/presentation/protocols'

export default class ValidationSpy implements Validation {
  errorMessage: string
  fieldName: string
  fieldValue: string
  validate(fieldName: string, fieldValue: string): string {
    this.fieldName = fieldName
    this.fieldValue = fieldValue
    return this.errorMessage
  }
}
