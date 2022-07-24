import { Validation } from '@/presentation'

export default class ValidationStub implements Validation {
  errorMessage: string

  validate(fieldName: string, fieldValue: string): string {
    return this.errorMessage
  }
}
