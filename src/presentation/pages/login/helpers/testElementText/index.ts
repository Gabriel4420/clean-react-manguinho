import { RenderResult } from '@testing-library/react'

const testElementText = (
  sut: RenderResult,

  fieldName: string,

  text: string,

  //
): void => {
  //

  const el = sut.queryByTestId(fieldName)

  expect(el.textContent).toBe(text)

  //
}
export default testElementText
