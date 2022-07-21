import { RenderResult } from '@testing-library/react'

const testButtonIsDisabled = (
  sut: RenderResult,

  fieldName: string,

  isDisabled: boolean,

  //
): void => {
  //

  const button = sut.getByTestId(fieldName) as HTMLButtonElement

  expect(button.disabled).toBe(isDisabled)

  //
}

export default testButtonIsDisabled
