import { RenderResult, fireEvent } from "@testing-library/react"
import faker from "faker"

const populateEmailField = (
  sut: RenderResult,

  email = faker.internet.email(),
): void => {
  //

  const emailInput = sut.getByTestId('email')

  fireEvent.input(emailInput, {
    target: { value: email },
  })

  //
}

export default populateEmailField
