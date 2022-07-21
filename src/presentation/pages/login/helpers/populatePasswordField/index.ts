import { RenderResult, fireEvent } from "@testing-library/react"
import faker from "faker"

const populatePasswordField = (
  sut: RenderResult,

  password = faker.internet.password(),
): void => {
  const passwordInput = sut.getByTestId('password')

  fireEvent.input(passwordInput, {
    target: { value: password },
  })
}

export default populatePasswordField
