import { testButtonIsDisabled, testErrorWrapChildCount, testStatusForField } from '@/presentation'
import { RenderResult } from '@testing-library/react'

const InitialStateStart = (
  sut: RenderResult,
  fieldNameButton: string,
  fieldNameStatus: 'email' |'password',
  fieldNameStatus2: 'email' |'password',
  count: number,
  validationError?: string,
  isDisabled?: boolean,
): void => {
  //

   /* testErrorWrapChildCount(sut, 0)

    testButtonIsDisabled(sut, 'submit', true)

    testStatusForField(sut, 'email', validationError)

    testStatusForField(sut, 'password', validationError) 
    */

  testErrorWrapChildCount(sut, count)

  testButtonIsDisabled(sut, fieldNameButton, isDisabled)

  testStatusForField(sut, fieldNameStatus, validationError)

  testStatusForField(sut, fieldNameStatus2, validationError)
  //
}

export default InitialStateStart
