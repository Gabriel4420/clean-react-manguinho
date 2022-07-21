import { RenderResult } from '@testing-library/react'

const testElementExists = (
  sut: RenderResult,

  fieldName: string,

  //
): void => {
  //

  const el = sut.getByTestId(fieldName)

  expect(el).toBeTruthy()

  //
}

export default testElementExists
