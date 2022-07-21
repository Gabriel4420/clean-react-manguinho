import { RenderResult } from "@testing-library/react"

const testErrorWrapChildCount = (
  sut: RenderResult,

  count: number,

  //
): void => {
  //

  const errorWrap = sut.getByTestId('error-wrap')

  expect(errorWrap.childElementCount).toBe(count)

  //
}

export default testErrorWrapChildCount
