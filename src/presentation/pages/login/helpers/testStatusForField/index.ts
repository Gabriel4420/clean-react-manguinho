import { RenderResult } from "@testing-library/react"

const testStatusForField = (
  sut: RenderResult,

  fieldName: string,

  validationError?: string,
): void => {
  //

  const emailStatus = sut.getByTestId(`${fieldName}-status`)

  expect(emailStatus.title).toBe(validationError || 'Right')

  expect(emailStatus.textContent).toBe(validationError ? '🔴' : '🟢')

  //
}

export default testStatusForField